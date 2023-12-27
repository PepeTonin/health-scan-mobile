import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/pages/login/Login";
import Cadastrar from "../components/pages/cadastrar/Cadastrar";
import { AuthContext } from "../contexts/auth";
import StackDefaultNavigator from "./StackDefaultNavigator";

const Stack = createNativeStackNavigator();

export default function StackLoginRouter() {
  const { isLogged, usuario, setUsuario, setIsLogged } =
    useContext(AuthContext);

  return (
    <>
      {!isLogged ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
        </Stack.Navigator>
      ) : (
        <StackDefaultNavigator />
      )}
    </>
  );
}
