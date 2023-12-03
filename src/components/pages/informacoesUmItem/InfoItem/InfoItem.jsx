import { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import BackButton from "../../../shared/BackButton/BackButton";
import Colors from "../../../../css/default/Colors";
import { findProdutoByCodBarra } from "../../../../service/api/produto";
import { ActivityIndicator } from "react-native-paper";
import Fonts from "../../../../css/default/Fonts";
import NutriScoreImage from "../NutriScoreImage/NutriScoreImage";
import { saveProdutoPesquisado } from "../../../../service/server/produtoPesquisadoService";
import { AuthContext } from "../../../../contexts/auth";

export default function InfoItem(props) {
  const [produto, setProduto] = useState();
  const [state, setState] = useState(0); //0-> carregando 1-> encontrado 2-> não encontrado
  const nutriments = [
    { chave: "carboidratos", valor: "carbohydrates_value" },
    { chave: "KCAL", valor: "energy-kcal_value" },
    { chave: "gorduras", valor: "fat_value" },
    { chave: "proteinas", valor: "proteins_value" }]

    const { isLogged, usuario, setUsuario, setIsLogged } = useContext(AuthContext);

  useEffect(() => {
    setState(0);

    const codBarra = props.codBarra;
    console.log(codBarra)
    findProdutoByCodBarra(codBarra)
      .then((item) => {
        setProduto(item.data.product);
        setState(1);

        const produtoPesquisado = {
          usuario: {id: usuario.id},
          produto: {codBarra: codBarra},
          descricaoProduto: item.data.product.product_name,
          imagemProduto: item.data.product.image_url,
          codBarra: codBarra
        }
        saveProdutoPesquisado(produtoPesquisado)
      })
      .catch((e) => {
        setState(2);
      });
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <>

      {state == 1 && produto ? (
        <View>
          <View>
            <View style={styles.imageInfoContainer}>
              <Image
                style={styles.image}
                source={{ uri: produto.image_url }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{produto.product_name}</Text>
                <Text style={styles.textoDestaque}>
                  Categoria: {produto.categories}
                </Text>
                <Text style={styles.textoDestaque}>Alergicos: </Text>
                <View style={styles.alergicosContainer}>
                  {/*produto.alergicos.map((item, index) => (
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
          {produto.nutriments && (
            <View>
              {nutriments.map((item, i) =>
                <View key={i}>
                  <View style={styles.itemTabelaNutricionalContainer}>
                    <Text style={styles.textoNormal}>{item.chave + ": "}</Text>

                    <Text style={styles.textoNormal}>
                      {produto.nutriments[item.valor]
                        ? (produto.nutriments[item.valor] + " " + produto.nutriments[item.valor.replace("value", "unit")])
                        : "---"}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )
          }
          {/*produto.ingredients &&
            <View>
              <Text style={styles.textoDestaque}>Ingredientes</Text>
              {produto.ingredients.map((item, index) => (
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
            <Image style={{ width: 150, height: 150 }} source={require("../../../../assets/no-data.png")} />
            <Text style={{
              color: Colors.white,
              fontFamily: Fonts.primaryFont,
              fontSize: 15
            }}>Produto não encontrado em nossa base</Text>
          </View>}
    </>
  );
}
