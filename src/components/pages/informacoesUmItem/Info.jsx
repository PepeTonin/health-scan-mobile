import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import { produtos } from "../../../fakeData/fakeData";
import Colors from "../../../css/default/Colors";

export default function Info({ navigation, route }) {
  const [informacoesDoProduto, setInformacoesDoProduto] = useState();

  useEffect(() => {
    const idProduto = route.params;
    const produto = produtos.find((item) => item.id === idProduto);
    setInformacoesDoProduto(produto);
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

      {informacoesDoProduto && (
        <View>
          <View>
            <View style={styles.imageInfoContainer}>
              <Image
                style={styles.image}
                source={{ uri: informacoesDoProduto.image }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{informacoesDoProduto.nome}</Text>
                <Text style={styles.textoNormal}>
                  Categoria: {informacoesDoProduto.categoria}
                </Text>
                <Text style={styles.textoNormal}>Alergicos: </Text>
                <View style={styles.alergicosContainer}>
                  {informacoesDoProduto.alergicos.map((item, index) => (
                    <Text style={styles.textoNormal} key={index}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.notaContainer}>
              {informacoesDoProduto.nota > 7 ? (
                <Entypo
                  name="emoji-happy"
                  size={24}
                  color={Colors.primaryColorLight}
                />
              ) : (
                <Entypo name="emoji-sad" size={24} color={Colors.error} />
              )}
              <Text
                style={[
                  styles.textoNota,
                  informacoesDoProduto.nota > 7
                    ? styles.positivo
                    : styles.negativo,
                ]}
              >
                Nota: {informacoesDoProduto.nota}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.textoDestaque}>
              Tabela nutricional (valores por 100g de produto)
            </Text>
            {Object.keys(informacoesDoProduto.tabelaNutricional).map(
              (key, index) => (
                <View style={styles.itemTabelaNutricionalContainer} key={index}>
                  <Text style={styles.textoNormal}>{key + ": "}</Text>

                  <Text style={styles.textoNormal}>
                    {informacoesDoProduto.tabelaNutricional[key] +
                      (key.toLowerCase() === "calorias" ? " kcal" : " g")}
                  </Text>
                </View>
              )
            )}
          </View>

          <View>
            <Text style={styles.textoDestaque}>Ingredientes</Text>
            {informacoesDoProduto.ingredientes.map((item, index) => (
              <Text style={[styles.textoNormal, styles.textoCorpo]} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
