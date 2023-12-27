import { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, PaperProvider } from "react-native-paper";
import InputText from "../../shared/InputText/InputText";
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
import {
  logar,
  logarToken,
  validarCodigoEmail,
} from "../../../service/server/usuarioService";
import ValidarCodigoModal from "../cadastrar/modal/ValidarCodigoModal";
import { AuthContext } from "../../../contexts/auth";
import {
  buscarUsuario,
  inserirUsuario,
  removerUsuario,
} from "../../../database/usuarioPercistence";
import { sha256 } from "../../../utils/cripto";
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [valido, setValido] = useState({});

  const [visible, setVisible] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const { isLogged, usuario, setUsuario, setIsLogged } =
    useContext(AuthContext);

  useEffect(() => {
    buscarUsuario().then((res) => {
      if (res.length > 0) {
        const usuario = { login: res[0].LOGIN, token: res[0].TOKEN };
        logarToken(usuario).then((res) => {
          const dados = res.data;
          if (dados.code == 200) {
            gravarUsuario(dados.result);
          }
        });
      }
    });
  }, [1]);

  function fazerLogin() {
    const usuario = {
      login: login,
      senha: senha,
    };

    const valid = validate(usuario);
    setValido(valid);

    if (valid.isValido) {
      sha256(usuario.senha).then((res) => {
        usuario.senha = res;
        logar(usuario).then((res) => {
          const dados = res.data;
          if (
            dados.message == "usuario-nao-validado" ||
            dados.message == "codigo-expirado"
          ) {
            setEmail(dados.result.email);
            setVisible(true);
          } else if (dados.message == "usuario-senha-nao-encontrado") {
            setValido({
              isValido: false,
              mensagem: "Login ou Senha incorreto(s)",
            });
          } else if (dados.code == 200) {
            gravarUsuario(dados.result);
          }
        });
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
      } else if (dados.message == "codigo-expirado") {
        setMessageModal("Codigo expirado");
      } else {
        setMessageModal("Codigo digitado não esta correto");
      }
    });
  }

  function gravarUsuario(usr) {
    setUsuario(usr);
    removerUsuario().then(() => {
      inserirUsuario([usr.id, usr.nome, usr.email, usr.login, usr.token]).then(
        () => {
          setIsLogged(true);
        }
      );
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
                onPress={() =>
                  navigation.navigate("Cadastrar", { isNovoUsuario: true })
                }
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
              width={Platform.OS === "ios" ? 310 : 350}
              isError={!valido.isValido && valido.campo == "login"}
              placeholder="Usuario"
              onChangeText={setLogin}
              value={login}
            />
            <InputText
              title="Senha"
              height={50}
              width={Platform.OS === "ios" ? 310 : 350}
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
            <PrimaryButton onPress={fazerLogin}>LOGIN</PrimaryButton>
            <Button
              mode="text"
              onPress={() =>
                navigation.navigate("Cadastrar", { isNovoUsuario: false })
              }
            >
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
