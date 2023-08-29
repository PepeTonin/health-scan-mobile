import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/components/pages/home/Home";
import Scan from "./src/components/pages/scan/Scan";
import Search from "./src/components/pages/search/Search";
import Colors from "./src/css/default/Colors";
import Cadastrar from "./src/components/pages/cadastrar/Cadastrar";
import Login from "./src/components/pages/login/Login";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  //carregar as fontes
  const [fontsLoaded] = useFonts({
    "Bebas-Neue": require("./assets/fonts/BebasNeue-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style={Colors.type === "darkmode" ? "light" : "dark"} />

      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Scan" component={Scan} />
      </Tab.Navigator>
    </View>
  );
}
