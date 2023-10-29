import { useCallback, useEffect } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./src/css/default/Colors";
import StackLoginRouter from "./src/routes/StackLoginRouter";
import { NavigationContainer } from "@react-navigation/native";
import { createDatabase } from "./src/database/default/database";
import AuthProvider from "./src/contexts/auth";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    //cria o banco local
    createDatabase();
  }, [1]);

  //carregar as fontes
  const [fontsLoaded] = useFonts({
    "Bebas-Neue": require("./assets/fonts/BebasNeue-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
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
    <>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style={Colors.type === "darkmode" ? "light" : "dark"} />
        <NavigationContainer>
          <AuthProvider>
            <StackLoginRouter />
          </AuthProvider>
        </NavigationContainer>
      </View>
    </>
  );
}
