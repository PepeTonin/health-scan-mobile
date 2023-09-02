import { View, Button } from 'react-native';

export function CadastroScreen ({ navigation }) {
  return (
    <View>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};