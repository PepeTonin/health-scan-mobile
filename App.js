import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Cadastrar from './src/components/pages/cadastrar/Cadastrar';
import Login from './src/components/pages/login/Login';
import Navigation from './navigation'

SplashScreen.preventAutoHideAsync();

export default function App() {

  //carregar as fontes
  const [fontsLoaded] = useFonts({
    'Bebas-Neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
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
      <Cadastrar />
      <Navigation />
    </View>
  );
  
<<<<<<< HEAD
}
=======
}
>>>>>>> b72804bd2190a00f4a5569e262afc4d72e613fad
