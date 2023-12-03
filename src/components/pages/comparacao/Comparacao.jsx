import { useEffect, useState } from "react";
import { FlatList, View, Text, Image } from "react-native";

import BackButton from "../../shared/BackButton/BackButton";
import PrimaryButton from "../../shared/PrimaryButton";
import { styles } from "./style";

import { produtos } from "../../../fakeData/fakeData";
import InformacoesProduto from "./InformacoesProduto/InformacoesProduto";

export default function Comparacao({ navigation, route }) {
  const [produtosParaComparar, setProdutosParaComparar] = useState([]);

  useEffect(() => {
    const produtosBuscados = [];
    route.params.map((item) => {
      produtosBuscados.push(produtos.find((prod) => prod.id === item.id));
      setProdutosParaComparar(produtosBuscados);
    });
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  function salvarHandler() {
    console.log("salvar");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <BackButton onPress={backButtonHandler} />
        <PrimaryButton onPress={salvarHandler}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </PrimaryButton>
      </View>

      <FlatList
        data={produtosParaComparar}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InformacoesProduto idProduto={item.id} />}
      />
    </View>
  );
}
