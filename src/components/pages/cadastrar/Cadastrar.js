import { useState } from 'react';
import { Button, IconButton } from 'react-native-paper'
import InputText from '../../shared/InputText';
import Colors from '../../../css/default/Colors';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledContainerInterno,
  StyledTitle,
  StyledTopContainer
} from './style';

export default function Cadastrar() {

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <StyledContainer>
      <StyledTopContainer>
        <IconButton
          icon="chevron-left"
          iconColor={Colors.primaryFontColor}
          size={50}
          onPress={() => console.log('Pressed')} />
        <StyledTitle variant="headlineLarge">
          CADASTRAR
        </StyledTitle>
      </StyledTopContainer>
      <StyledContainerInterno>
        <InputText
          title="Login"
          height={50}
          width={350}
          placeholder="Login"
          onChangeText={setLogin}
          value={login}
        />
        <InputText
          title="Email"
          height={50}
          width={350}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <InputText
          title="Senha"
          height={50}
          width={350}
          isPassword
          placeholder="Senha"
          inlineImageLeft='search_icon'
          onChangeText={setSenha}
          value={senha}
        />
        <InputText
          title="Confirmar Senha"
          height={50}
          width={350}
          isPassword
          placeholder="Confirmar Senha"
          inlineImageLeft='search_icon'
          onChangeText={setConfirmarSenha}
          value={confirmarSenha}
        />
      </StyledContainerInterno>
      <StyledButtonContainer>
        <Button
          textColor={Colors.primaryFontColorButton}
          buttonColor={Colors.primaryButtonColor}
          mode="elevated"
          onPress={() => console.log('Pressed')}>
          CADASTRAR
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}