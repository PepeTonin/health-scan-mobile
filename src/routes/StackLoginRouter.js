import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/pages/login/Login";
import Cadastrar from "../components/pages/cadastrar/Cadastrar";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
  );
}
