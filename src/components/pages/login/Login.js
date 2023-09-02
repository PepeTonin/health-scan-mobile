import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper'
import InputText from '../../shared/InputText';
import Colors from '../../../css/default/Colors';
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
  StyledButtonContainer
} from './style';
import { validate } from '../../../validators/login/loginValidator';

export default function Login({navigation}) {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [valido, setValido] = useState({});

  function logar(){
    const usuario = {
      login: login,
      senha: senha
    }

    setValido(validate(usuario));

    if(valido.isValido){
      //loga
    }
  }

  return (
    <StyledContainer>
      <StyledContainerInterno>
        <StyledTitle
          variant="headlineLarge">
          BEM VINDO
        </StyledTitle>
        <StyledCardContainer>
          <>
            <StyledLogo
              source={require('../../../assets/icone-sem-fundo.png')}
            />
          </>
          <View style={{ marginLeft: 60 }}>
            <StyledTextoBranco
              variant='titleLarge'>
              Healthscan
            </StyledTextoBranco>
            <StyledTextoBranco
              variant="titleSmall">
              {'escaneie seus alimentos\n viva saudável'}
            </StyledTextoBranco>
            <StyledButtonCard
              buttonColor={Colors.white}
              mode="elevated"
              onPress={() => navigation.navigate('Cadastrar')}>
              <StyledTextGeral
                variant='labelLarge'>
                CADASTRE-SE
              </StyledTextGeral>
            </StyledButtonCard>
          </View>
        </StyledCardContainer>

        <StyledDividerEspacado bold />

        <StyledTitle
          variant="headlineLarge">
          LOGIN
        </StyledTitle>
        <StyledInputContainer>
          <InputText
            title="Usuario"
            height={50}
            width={350}
            isError={!valido.isValido && valido.campo == 'login'}
            placeholder="Usuario"
            onChangeText={setLogin}
            value={login}
          />
          <InputText
            title="Senha"
            height={50}
            width={350}
            isError={!valido.isValido && valido.campo == 'senha'}
            isPassword
            placeholder="Senha"
            inlineImageLeft='search_icon'
            onChangeText={setSenha}
            value={senha}
          />
          { valido && !valido.isValido &&
            <Text style={{color: Colors.error, marginLeft: 10}}>{valido.mensagem}</Text>
          }
        </StyledInputContainer>
        <StyledButtonContainer>
          <Button
            textColor={Colors.primaryFontColorButton}
            buttonColor={Colors.primaryButtonColor}
            mode="elevated"
            onPress={() => logar()}>
            LOGIN
          </Button>
          <Button
            mode="text"
            onPress={() => console.log('Pressed')}>
            <StyledTitle
              variant="labelMedium">
              Esqueceu sua conta?
            </StyledTitle>
          </Button>
        </StyledButtonContainer>
      </StyledContainerInterno>
    </StyledContainer>
  );
}