import { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, PaperProvider } from "react-native-paper";
import InputText from "../../shared/InputText";
import Colors from "../../../css/default/Colors";
import {
  StyledContainer,
  StyledContainerInterno,
  StyledDividerEspacado,
  StyledInputContainer,
  StyledTextoBranco,
  StyledTitle,
  StyledCardContainer,
  StyledLogo,
  StyledTextGeral,
  StyledButtonCard,
  StyledButtonContainer,
} from "./style";
import { validate } from "../../../validators/login/loginValidator";
import { logar, validarCodigoEmail } from "../../../service/cadastrarService";
import ValidarCodigoModal from "../cadastrar/modal/ValidarCodigoModal";
import { AuthContext } from "../../../contexts/auth";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [valido, setValido] = useState({});

  const [visible, setVisible] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const { isLogged, usuario, setUsuario, setIsLogged } = useContext(AuthContext);

  function fazerLogin() {
    const usuario = {
      login: login,
      senha: senha,
    };

    const valid = validate(usuario);
    setValido(valid);

    if (valid.isValido) {
      logar(usuario).then((res) => {
        const dados = res.data;
        if (dados.message == "usuario-nao-validado") {
          setEmail(dados.result.email);
          setVisible(true);
        } else if (dados.message == "usuario-senha-nao-encontrado"){
          setValido({        
            isValido: false,
            mensagem: "Login ou Senha incorreto(s)"
          });
        } else if (dados.code == 200) {
          setUsuario(dados.result)
          setIsLogged(true);
        }
      });
    }
  }

  function validarCodigo(codigo, email, login) {
    const usuario = { validator: codigo, email: email, login: login };
    validarCodigoEmail(usuario).then((res) => {
      const dados = res.data;
      if (dados.code == 200) {
        setVisible(false);
        Alert.alert(
          "Validação",
          "Email validado com sucesso, entre agora usando seu login e senha"
        );
      } else {
        setMessageModal("Codigo digitado não esta correto");
      }
    });
  }

  return (
    <PaperProvider>
      <StyledContainer>
        <StyledContainerInterno>
          <ValidarCodigoModal
            login={login}
            email={email}
            visible={visible}
            message={messageModal}
            validarCodigo={validarCodigo}
            setVisible={setVisible}
          ></ValidarCodigoModal>
          <StyledTitle variant="headlineLarge">BEM VINDO</StyledTitle>
          <StyledCardContainer>
            <>
              <StyledLogo
                source={require("../../../assets/icone-sem-fundo.png")}
              />
            </>
            <View style={{ marginLeft: 60 }}>
              <StyledTextoBranco variant="titleLarge">
                Healthscan
              </StyledTextoBranco>
              <StyledTextoBranco variant="titleSmall">
                {"escaneie seus alimentos\n viva saudável"}
              </StyledTextoBranco>
              <StyledButtonCard
                buttonColor={Colors.white}
                mode="elevated"
                onPress={() => navigation.navigate("Cadastrar")}
              >
                <StyledTextGeral variant="labelLarge">
                  CADASTRE-SE
                </StyledTextGeral>
              </StyledButtonCard>
            </View>
          </StyledCardContainer>

          <StyledDividerEspacado bold />

          <StyledTitle variant="headlineLarge">LOGIN</StyledTitle>
          <StyledInputContainer>
            <InputText
              title="Usuario"
              height={50}
              width={350}
              isError={!valido.isValido && valido.campo == "login"}
              placeholder="Usuario"
              onChangeText={setLogin}
              value={login}
            />
            <InputText
              title="Senha"
              height={50}
              width={350}
              isError={!valido.isValido && valido.campo == "senha"}
              isPassword
              placeholder="Senha"
              inlineImageLeft="search_icon"
              onChangeText={setSenha}
              value={senha}
            />
            {valido && !valido.isValido && (
              <Text style={{ color: Colors.error, marginLeft: 10 }}>
                {valido.mensagem}
              </Text>
            )}
          </StyledInputContainer>
          <StyledButtonContainer>
            <Button
              textColor={Colors.primaryFontColorButton}
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() => fazerLogin()}
            >
              LOGIN
            </Button>
            <Button mode="text" onPress={() => console.log("Pressed")}>
              <StyledTitle variant="labelMedium">
                Esqueceu sua conta?
              </StyledTitle>
            </Button>
          </StyledButtonContainer>
        </StyledContainerInterno>
      </StyledContainer>
    </PaperProvider>
  );
}
