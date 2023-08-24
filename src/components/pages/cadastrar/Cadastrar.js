import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper'
import InputText from '../../shared/InputText';
import Colors from '../../../css/default/Colors';
import Fonts from '../../../css/default/Fonts';

export default function Cadastrar() {

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <IconButton
          icon="chevron-left"
          iconColor={Colors.primaryFontColor}
          size={50}
          onPress={() => console.log('Pressed')} />
        <Text variant="headlineLarge"
          style={styles.title}>
          CADASTRAR
        </Text>
      </View>
      <View style={styles.containerInterno}>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button
          textColor={Colors.primaryFontColorButton}
          buttonColor={Colors.primaryButtonColor}
          mode="elevated"
          onPress={() => console.log('Pressed')}>
          CADASTRAR
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
  },
  containerInterno: {
    marginHorizontal: 30,
    justifyContent: 'center',
    flex: 1
  },
  topContainer: {
    marginTop: 60,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 30,
    marginBottom: 50,
    marginTop: 30
  },
  title: {
    marginLeft: (Dimensions.get('window').width / 4) - 40,
    color: Colors.primaryFontColor,
    fontFamily: Fonts.primaryFont,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  }
});
