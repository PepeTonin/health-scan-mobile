import { useState } from "react";
import { Button, IconButton, Text } from "react-native-paper";
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
import { cadastrarUsuario } from "../../../service/cadastrarService";

export default function Cadastrar({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [validator, setValidator] = useState({ isValido: true });

  function cadastrar() {
    const usuario = {
      login: login,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    setValidator(validate(usuario));

    if (validator.isValido) {
      enviarCadastro(usuario);
    }
  }

  function enviarCadastro(usuario) {
    cadastrarUsuario(usuario)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        //erro
      })
      .finally({
        //validar email
      });
  }

  return (
    <StyledContainer>
      <StyledTopContainer>
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
          placeholder="Login"
          onChangeText={setLogin}
          value={login}
        />
        <InputText
          title="Email"
          isError={!validator.isValido && validator.campo == "email"}
          height={50}
          width={350}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <InputText
          title="Senha"
          isError={!validator.isValido && validator.campo == "senha"}
          height={50}
          width={350}
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
          onPress={() => cadastrar()}
        >
          CADASTRAR
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}
