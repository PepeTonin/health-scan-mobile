import { View, Button } from 'react-native';

export function LoginScreen ({ navigation }) {
  return (
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};