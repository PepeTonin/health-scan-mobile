import { useState } from "react";
import { Button, IconButton, Text, PaperProvider } from "react-native-paper";
import InputText from "../../shared/InputText";
import Colors from "../../../css/default/Colors";
import {
  StyledButtonContainer,
  StyledContainer,
  StyledContainerInterno,
  StyledTitle,
  StyledTopContainer,
  StyledTextError,
} from "./style";
import { validate } from "../../../validators/cadastrar/cadastrarValidator";
import {
  cadastrarUsuario,
  validarCodigoEmail,
} from "../../../service/cadastrarService";
import ValidarCodigoModal from "./modal/ValidarCodigoModal";
import { Alert } from "react-native";

export default function Cadastrar({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [validator, setValidator] = useState({ isValido: true });

  const [loading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messageModal, setMessageModal] = useState("")

  async function cadastrar() {
    const usuario = {
      login: login,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    const valid = await validate(usuario);
    setValidator(valid);
    if (valid.isValido) {
      enviarCadastro(usuario);
    }
  }

  function enviarCadastro(usuario) {
    setIsLoading(true);
    cadastrarUsuario(usuario)
      .then((res) => {
        dados = res.data;
        if (dados.message == "email-ja-existe") {
          setValidator({
            isValido: false,
            mensagem: "Email cadastrado ja existe!",
            campo: "email",
          });
          return;
        } else if (dados.message == "login-ja-existe") {
          setValidator({
            isValido: false,
            mensagem: "Login cadastrado ja existe!",
            campo: "login",
          });
          return;
        } else if (dados.code == 200) {
          setVisible(true);
          return;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function validarCodigo(codigo, email, login) {
    const usuario = { validator: codigo, email: email, login: login };
    validarCodigoEmail(usuario)
    .then((res)=>{
      const dados = res.data;
      if(dados.code == 200){
        setVisible(false)
        Alert.alert("Validação", "Email validado com sucesso, entre agora usando seu login e senha")
        navigation.navigate("Login")
      } else {
        setMessageModal("Codigo digitado não esta correto")
      }
    });
  }

  return (
    <PaperProvider>
      <StyledContainer>
        <StyledTopContainer>
          <ValidarCodigoModal
            login={login}
            email={email}
            visible={visible}
            message={messageModal}
            validarCodigo={validarCodigo}
            setVisible={setVisible}
          ></ValidarCodigoModal>
          <IconButton
            icon="chevron-left"
            iconColor={Colors.primaryFontColor}
            size={50}
            onPress={() => navigation.goBack()}
          />
          <StyledTitle variant="headlineLarge">CADASTRAR</StyledTitle>
        </StyledTopContainer>
        <StyledContainerInterno>
          <InputText
            title="Login"
            isError={!validator.isValido && validator.campo == "login"}
            height={50}
            width={350}
            disable={loading}
            placeholder="Login"
            onChangeText={setLogin}
            value={login}
          />
          <InputText
            title="Email"
            isError={!validator.isValido && validator.campo == "email"}
            height={50}
            width={350}
            disable={loading}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <InputText
            title="Senha"
            isError={!validator.isValido && validator.campo == "senha"}
            height={50}
            width={350}
            disable={loading}
            isPassword
            placeholder="Senha"
            inlineImageLeft="search_icon"
            onChangeText={setSenha}
            value={senha}
          />
          <InputText
            title="Confirmar Senha"
            isError={!validator.isValido && validator.campo == "confirmarsenha"}
            height={50}
            width={350}
            disable={loading}
            isPassword
            placeholder="Confirmar Senha"
            inlineImageLeft="search_icon"
            onChangeText={setConfirmarSenha}
            value={confirmarSenha}
          />
          {!validator.isValido && (
            <StyledTextError>{validator.mensagem}</StyledTextError>
          )}
        </StyledContainerInterno>
        <StyledButtonContainer>
          <Button
            textColor={Colors.primaryFontColorButton}
            buttonColor={Colors.primaryButtonColor}
            mode="elevated"
            disabled={loading}
            onPress={() => cadastrar()}
          >
            CADASTRAR
          </Button>
        </StyledButtonContainer>
      </StyledContainer>
    </PaperProvider>
  );
}
