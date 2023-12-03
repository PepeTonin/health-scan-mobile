import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import Colors from "../../../../css/default/Colors";
import { produtos } from "../../../../fakeData/fakeData";

export default function InformacoesProduto({ idProduto }) {
  const [informacoesDoProduto, setInformacoesDoProduto] = useState();

  useEffect(() => {
    const produtoBuscado = produtos.find((item) => item.id === idProduto);
    setInformacoesDoProduto(produtoBuscado);
  }, []);

  if (!informacoesDoProduto) return null;
  return (
    <View style={styles.containerExterno}>
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
              informacoesDoProduto.nota > 7 ? styles.positivo : styles.negativo,
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
    </View>
  );
}
