import { useEffect, useState } from "react";
import { View } from "react-native";

import BackButton from "../../shared/BackButton/BackButton";
import PrimaryButton from "../../shared/PrimaryButton";
import { styles } from "./style";
import { produtos } from "../../../fakeData/fakeData";

export default function Comparacao({ navigation, route }) {
  const [produtosParaComparar, setProdutosParaComparar] = useState([]);

  useEffect(() => {
    route.params.map((item) => {
      const produto = produtos.find((prod) => prod.id === item.id);
      setProdutosParaComparar([...produtosParaComparar, produto]);
    });
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  function escanearHandler() {
    navigation.navigate("Scan");
  }

  function pesquisarHandler() {
    navigation.navigate("Search");
  }

  function informacoesHandler() {
    navigation.navigate("Info");
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <BackButton onPress={backButtonHandler} />
        {/* botao salvar comapracao */}
      </View>
      <View>
        <PrimaryButton onPress={escanearHandler}>ESCANEAR</PrimaryButton>
        <PrimaryButton onPress={pesquisarHandler}>PESQUISAR</PrimaryButton>
        <PrimaryButton onPress={informacoesHandler}>
          INFORMACOES DE UM ITEM
        </PrimaryButton>
      </View>
    </View>
  );
}
