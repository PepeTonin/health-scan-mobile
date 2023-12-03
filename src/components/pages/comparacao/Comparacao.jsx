import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import InfoItem from "../informacoesUmItem/InfoItem/InfoItem";
import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";

export default function Comparacao({ navigation, route }) {

  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    setListaProdutos(route.params);
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
            <View style={styles.header}>
        <BackButton onPress={backButtonHandler} />
        <Text style={styles.titulo}>Comparação de Produtos</Text>
        <View style={styles.placeholderView}></View>
      </View>
      <FlatList
        data={listaProdutos}
        keyExtractor={(_, i) => i}
        renderItem={(item) =>
          <>
            <View style={{marginTop: 20}}></View>
            <InfoItem codBarra={item.item.codBarra} />
          </>
        } />
    </View>
  );
}
