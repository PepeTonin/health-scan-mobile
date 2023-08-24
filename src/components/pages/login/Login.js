import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper'
import InputText from '../../shared/InputText';
import Colors from '../../../css/default/Colors';
import Fonts from '../../../css/default/Fonts';

export default function Login() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  return ( 
    <View style={styles.container}>
      <View style={styles.containerInterno}>
        <Text
          variant="headlineLarge"
          style={styles.title}>
          BEM VINDO
        </Text>
        <View style={styles.cardContainer}>
          <>
            <Image
              style={styles.logo}
              source={require('../../../assets/icone-sem-fundo.png')}
            />
          </>
          <View style={{ marginLeft: 60 }}>
            <Text
              variant='titleLarge'
              style={styles.textoBranco}>
              Healthscan
            </Text>
            <Text
              variant="titleSmall"
              style={styles.textoBranco}>
              {'escaneie seus alimentos\n viva saudável'}
            </Text>
            <Button
              style={styles.buttonCard}
              buttonColor={Colors.white}
              mode="elevated"
              onPress={() => console.log('Pressed')}>
              <Text
                variant='labelLarge'
                style={styles.textGeral}>
                CADASTRE-SE
              </Text>
            </Button>
          </View>
        </View>

        <Divider
          bold
          style={styles.divider} />

        <Text
          variant="headlineLarge"
          style={styles.title}>
          LOGIN
        </Text>
        <View style={styles.inputContainer}>
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
        </View>
        <View style={styles.buttonContainer}>
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
            <Text
              variant="labelMedium"
              style={styles.title}>
              Esqueceu sua conta?
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20
  },
  buttonContainer: {
    marginTop: 30
  },
  logo: {
    width: 100,
    height: 118,
  },
  containerInterno: {
    marginHorizontal: 30
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
  },
  textoBranco: {
    textAlign: "right",
    color: Colors.primaryFontColorButton,
    fontFamily: Fonts.primaryFont
  },
  cardContainer: {
    backgroundColor: Colors.primaryButtonColor,
    height: 150,
    marginTop: 30,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  buttonCard: {
    height: 38,
    marginTop: 5
  },
  title: {
    color: Colors.primaryFontColor,
    fontFamily: Fonts.primaryFont
  },
  divider: {
    marginVertical: 20,
    marginVertical: 60
  },
  textGeral: {
    color: Colors.primaryButtonColor,
    fontFamily: Fonts.primaryFont
  }
});
