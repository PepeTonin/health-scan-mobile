import { useState } from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import PrimaryButton from "../../shared/PrimaryButton/PrimaryButton";
import { PaperProvider } from "react-native-paper";
import CameraModal from "./modal/cameraModal/CameraModal";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

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
          <Text style={styles.titulo}>Escanear Produto</Text>
          <View style={styles.placeholderView}></View>
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.tituloSecundario}>Precione o botão para escanear o produto</Text>

          <Image style={styles.noImage}
            source={require("../../../assets/no-image-barcode.png")} />
          <View style={{ width: '100%', marginTop: 20 }}>
            <PrimaryButton
              onPress={() => setVisibleScan(true)}>
              ESCANEAR
            </PrimaryButton>
          </View>
          <Image style={styles.imagemTutorial}
            source={require("../../../assets/imagem-tutorial.png")} />
          <View style={{ flexDirection: 'row'}}>
            <Text style={{ color: Colors.primaryFontColor, fontFamily: Fonts.primaryFont, textAlign: 'center', padding: 10, width: 180 }}>
              Posicione a câmera sobre o código de barras do produto e aguarde a leitura automática.
            </Text>
            <Text style={{ color: Colors.primaryFontColor, fontFamily: Fonts.primaryFont, textAlign: 'center', padding: 10, width: 180 }}>
              Vizualize as informações do produto na tela.
            </Text>
          </View>


        </View>
      </View>
    </PaperProvider>
  );
}
