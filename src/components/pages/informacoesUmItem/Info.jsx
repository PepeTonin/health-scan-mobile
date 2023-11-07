import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import Colors from "../../../css/default/Colors";
import { findProdutoByCodBarra } from "../../../service/api/produto";
import { ActivityIndicator } from "react-native-paper";
import Fonts from "../../../css/default/Fonts";
import NutriScoreImage from "./NutriScoreImage/NutriScoreImage";

export default function Info({ navigation, route }) {
  const [informacoesDoProduto, setInformacoesDoProduto] = useState();
  const [state, setState] = useState(0); //0-> carregando 1-> encontrado 2-> não encontrado
  const nutriments = [
    { chave: "carboidratos", valor: "carbohydrates_value" },
    { chave: "KCAL", valor: "energy-kcal_value" },
    { chave: "gorduras", valor: "fat_value" },
    { chave: "proteinas", valor: "proteins_value" }]

  useEffect(() => {
    setState(0);

    const codBarra = route.params;

    findProdutoByCodBarra(codBarra)
      .then((item) => {
        setInformacoesDoProduto(item.data.product);
        setState(1);
      })
      .catch(() => {
        setState(2);
      });
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <BackButton onPress={backButtonHandler} />
        <Text style={styles.titulo}>Informações do produto</Text>
        <View style={styles.placeholderView}></View>
      </View>

      {state == 1 && informacoesDoProduto ? (
        <View>
          <View>
            <View style={styles.imageInfoContainer}>
              <Image
                style={styles.image}
                source={{ uri: informacoesDoProduto.image_url }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{informacoesDoProduto.product_name}</Text>
                <Text style={styles.textoDestaque}>
                  Categoria: {informacoesDoProduto.categories}
                </Text>
                <Text style={styles.textoDestaque}>Alergicos: </Text>
                <View style={styles.alergicosContainer}>
                  {/*informacoesDoProduto.alergicos.map((item, index) => (
                    <Text style={styles.textoNormal} key={index}>
                      {item}
                    </Text>
                  ))*/}
                </View>
              </View>
            </View>

            <View style={styles.notaContainer}>
              <NutriScoreImage />
            </View>
          </View>
          <Text style={styles.textoDestaque}>
            Tabela nutricional (valores por 100g de produto)
          </Text>
          {informacoesDoProduto.nutriments && (
            <View>
              {nutriments.map((item, i) =>
                <View key={i}>
                  <View style={styles.itemTabelaNutricionalContainer}>
                    <Text style={styles.textoNormal}>{item.chave + ": "}</Text>

                    <Text style={styles.textoNormal}>
                      {informacoesDoProduto.nutriments[item.valor]
                        ? (informacoesDoProduto.nutriments[item.valor] + " " + informacoesDoProduto.nutriments[item.valor.replace("value", "unit")])
                        : "---"}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )
          }
          {/*informacoesDoProduto.ingredients &&
            <View>
              <Text style={styles.textoDestaque}>Ingredientes</Text>
              {informacoesDoProduto.ingredients.map((item, index) => (
                <Text style={[styles.textoNormal, styles.textoCorpo]} key={index}>
                  {item}
                </Text>
              ))}
            </View>
              */}
        </View>
      )
        : state == 0 ?
          <View>
            <ActivityIndicator
              size={'large'}
              animating={true}
              color={Colors.primaryFontColor} />

          </View>
          :
          <View style={{ alignSelf: 'center', alignItems: 'center' }}>
            <Image style={{ width: 150, height: 150 }} source={require("../../../assets/no-data.png")} />
            <Text style={{
              color: Colors.white,
              fontFamily: Fonts.primaryFont,
              fontSize: 15
            }}>Produto não encontrado em nossa base</Text>
          </View>}
    </View>
  );
}
