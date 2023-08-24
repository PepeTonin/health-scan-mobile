import { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper'
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

export default function Login() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

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
              onPress={() => console.log('Pressed')}>
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
            placeholder="Usuario"
            onChangeText={setLogin}
            value={login}
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
        </StyledInputContainer>
        <StyledButtonContainer>
          <Button
            textColor={Colors.primaryFontColorButton}
            buttonColor={Colors.primaryButtonColor}
            mode="elevated"
            onPress={() => console.log('Pressed')}>
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