import { useState } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";
import { PaperProvider } from "react-native-paper";
import CameraModal from "./modal/cameraModal/CameraModal";

export default function Scan({ navigation }) {

  const [visibleScan, setVisibleScan] = useState(false);

  function abrirInfoProduto(data) {
    navigation.navigate("Info", data);
  }

  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <PaperProvider>
      <CameraModal
        visible={visibleScan}
        setVisibleScan={setVisibleScan}
        abrirInfoProduto={abrirInfoProduto} />
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <BackButton onPress={backButtonHandler} />
          <Text style={styles.titulo}>Escanear código de barras</Text>
          <View style={styles.placeholderView}></View>
        </View>
        <View style={styles.bottomContainer}>
          <Image style={styles.noImage}
            source={require("../../../assets/no-image.png")} />
          <PrimaryButton
            onPress={() => setVisibleScan(true)}>
              ESCANEAR
          </PrimaryButton>
        </View>
      </View>
    </PaperProvider>
  );
}
