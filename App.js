import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
<<<<<<< Updated upstream
=======
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
>>>>>>> Stashed changes
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Home from "./src/components/pages/home/Home";
import Scan from "./src/components/pages/scan/Scan";
import Search from "./src/components/pages/search/Search";
import Colors from "./src/css/default/Colors";
import Cadastrar from "./src/components/pages/cadastrar/Cadastrar";
import Login from "./src/components/pages/login/Login";
import Routes from "./src/routes/Routes";

SplashScreen.preventAutoHideAsync();



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

<<<<<<< Updated upstream
  const isLogged = false;

  return (
    <>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style={Colors.type === "darkmode" ? "light" : "dark"} />
        <Routes />
      </View>
    </>
=======
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style={Colors.type === "darkmode" ? "light" : "dark"} />
      <NavigationContainer>

        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={Home} />
          <BottomTab.Screen name="Search" component={Search} />
          <BottomTab.Screen name="Scan" component={Scan} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
>>>>>>> Stashed changes
  );
}
