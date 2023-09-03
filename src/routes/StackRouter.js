import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/pages/login/Login";
import Cadastrar from "../components/pages/cadastrar/Cadastrar";
import Home from "../components/pages/home/Home";

const Stack = createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
