import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./src/css/default/Colors";
import StackLoginRouter from "./src/routes/StackLoginRouter";
import { NavigationContainer } from "@react-navigation/native";
import { createDatabase } from "./src/database/default/database";

SplashScreen.preventAutoHideAsync();

export default function App() {
  //cria o banco local
  createDatabase();

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

  const isLogged = false;

  return (
    <>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style={Colors.type === "darkmode" ? "light" : "dark"} />
        <NavigationContainer>
          <StackLoginRouter />
        </NavigationContainer>
      </View>
    </>
  );
}
