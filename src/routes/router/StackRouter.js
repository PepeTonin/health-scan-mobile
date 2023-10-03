import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../components/pages/login/Login";
import Cadastrar from "../components/pages/cadastrar/Cadastrar";

const Stack = createNativeStackNavigator();

export default function StackRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
    </Stack.Navigator>
  );
}
