import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Comparacao from "../components/pages/comparacao/Comparacao";
import Info from "../components/pages/informacoesUmItem/Info";
import BottomTabRouter from "./BottomTabRouter";

const Stack = createNativeStackNavigator();

export default function StackDefaultNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabRouter" component={BottomTabRouter} />
        <Stack.Screen name="Comparar" component={Comparacao} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </>
  );
}
