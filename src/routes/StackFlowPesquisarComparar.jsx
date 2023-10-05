import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Comparacao from "../components/pages/comparacao/Comparacao";
import Search from "../components/pages/search/Search";
import Scan from "../components/pages/scan/Scan";

const Stack = createNativeStackNavigator();

export default function StackFlowPesquisarComparar() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Comparar" component={Comparacao} />
        <Stack.Screen name="Camera" component={Scan} />
      </Stack.Navigator>
    </>
  );
}
