import { useEffect, useState } from "react";
import { Button, IconButton, PaperProvider } from "react-native-paper";
import InputText from "../../shared/InputText/InputText";
import Colors from "../../../css/default/Colors";
import {
  StyledButtonContainer,
  StyledContainer,
  StyledContainerInterno,
  StyledTitle,
  StyledTopContainer,
  StyledTextError,
} from "./style";
import {
  validarSenha,
  validate,
} from "../../../validators/cadastrar/cadastrarValidator";
import {
  cadastrarUsuario,
  validarCodigoEmail,
  enviarEmailRecuperacao,
  cadastrarNovaSenha,
} from "../../../service/server/usuarioService";
import ValidarCodigoModal from "./modal/ValidarCodigoModal";
import { Alert } from "react-native";
import RecuperarContaModal from "./modal/RecuperarContaModal";
import ValidarRecuperarContaModal from "./modal/ValidarRecuperarContaModal";
import { sha256 } from "../../../utils/cripto";

export default function Cadastrar({ navigation, route }) {
  const [isNovoUsuario, setIsNovoUsuario] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [usuarioRecuperado, setUsuarioRecuperado] = useState({});
  const [isRecuperarSenha, setIsRecuperarSenha] = useState(false);

  const [validator, setValidator] = useState({ isValido: true });

  const [loading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const [visibleRecuperarConta, setVisibleRecuperarConta] = useState(true);

  useEffect(() => {
    setVisibleRecuperarConta(!route.params.isNovoUsuario);
    setIsNovoUsuario(route.params.isNovoUsuario);
  }, [1]);

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
      sha256(usuario.senha).then((res) => {
        usuario.confirmarSenha = res;
        usuario.senha = res;
        enviarCadastro(usuario);
      });
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

  function validarCodigo(codigo, email) {
    const usuario = { validator: codigo, email: email };
    validarCodigoEmail(usuario).then((res) => {
      const dados = res.data;
      if (dados.code == 200) {
        setVisible(false);
        Alert.alert(
          "Validação",
          "Email validado com sucesso, entre agora usando seu login e senha"
        );
        navigation.navigate("Login");
      } else if (dados.message == "codigo-expirado") {
        setMessageModal("Codigo expirado");
      } else {
        setMessageModal("Codigo digitado não esta correto");
      }
    });
  }

  async function recuperarSenha() {
    const usuario = {
      senha: senha,
      confirmarSenha: confirmarSenha,
      email: email,
    };

    const valid = await validarSenha(usuario);
    setValidator(valid);
    if (valid.isValido) {
      sha256(usuario.senha).then((pass) => {
        usuario.senha = pass;
        usuario.confirmarSenha = pass;

        cadastrarNovaSenha(usuario).then((res) => {
          const dados = res.data;
          if (dados.code == 200) {
            setVisible(false);
            Alert.alert(
              "Recuperar senha",
              "Senha alterada com sucesso, entre agora usando seu login e senha"
            );
            navigation.navigate("Login");
          }
        });
      });
    }
  }

  function back() {
    setVisibleRecuperarConta(false);
    navigation.goBack();
  }

  function enviarEmail(usuario) {
    return enviarEmailRecuperacao(usuario);
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
          <RecuperarContaModal
            login={login}
            email={email}
            setIsNext={setIsNext}
            enviarEmail={enviarEmail}
            setUsuario={setUsuarioRecuperado}
            visible={visibleRecuperarConta && !isNext}
            message={messageModal}
            back={back}
            validarCodigo={validarCodigo}
            setVisible={setVisibleRecuperarConta}
          ></RecuperarContaModal>
          <ValidarRecuperarContaModal
            login={login}
            email={email}
            visible={isNext}
            usuario={usuarioRecuperado}
            message={messageModal}
            back={back}
            setEmail={setEmail}
            validarCodigo={validarCodigo}
            setIsRecuperarSenha={setIsRecuperarSenha}
            setVisibleRecuperarConta={setVisibleRecuperarConta}
            setVisible={setIsNext}
          ></ValidarRecuperarContaModal>
          <IconButton
            icon="chevron-left"
            iconColor={Colors.primaryFontColor}
            size={50}
            onPress={() => navigation.goBack()}
          />
          <StyledTitle isNovoUsuario={isNovoUsuario} variant="headlineLarge">
            {isNovoUsuario ? "CADASTRAR" : "RECUPERAR SENHA"}
          </StyledTitle>
        </StyledTopContainer>
        <StyledContainerInterno>
          {!isRecuperarSenha && (
            <InputText
              title="Login"
              isError={!validator.isValido && validator.campo == "login"}
              height={50}
              width={350}
              disable={loading || !isNovoUsuario}
              placeholder="Login"
              onChangeText={setLogin}
              value={login}
            />
          )}
          {!isRecuperarSenha && (
            <InputText
              title="Email"
              isError={!validator.isValido && validator.campo == "email"}
              height={50}
              width={350}
              disable={loading || !isNovoUsuario}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
          )}

          <InputText
            title="Senha"
            isError={!validator.isValido && validator.campo == "senha"}
            height={50}
            width={350}
            disable={(loading || !isNovoUsuario) && !isRecuperarSenha}
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
            disable={(loading || !isNovoUsuario) && !isRecuperarSenha}
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
          {(isNovoUsuario || isRecuperarSenha) && !loading && (
            <Button
              textColor={Colors.primaryFontColorButton}
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() =>
                !isRecuperarSenha ? cadastrar() : recuperarSenha()
              }
            >
              {!isRecuperarSenha ? "CADASTRAR" : "RECUPERAR"}
            </Button>
          )}
        </StyledButtonContainer>
      </StyledContainer>
    </PaperProvider>
  );
}
