import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";
import Colors from "../../../../css/default/Colors";

export default function CardProduto({
  codBarra,
  urlImagemDoProduto,
  nomeDoProduto,
  descricaoDoProduto,
  tratarCliqueBotao,
  tratarCliqueCard,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableCardContainer}
        onPress={() => tratarCliqueCard(codBarra)}
      >
        <Image
          style={styles.image}
          source={
            urlImagemDoProduto
              ? { uri: urlImagemDoProduto }
              : require("../../../../assets/no-image.png")
          }
        />
        <View style={styles.textContainer}>
          <Text style={styles.nomeProduto}>{nomeDoProduto}</Text>
          <Text numberOfLines={1} style={styles.descricao}>
            {descricaoDoProduto}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        hitSlop={20}
        onPress={() => tratarCliqueBotao(codBarra, nomeDoProduto, codBarra)}
      >
        <AntDesign style={styles.icon} name="plus" size={32} color={Colors.primaryFontColor} />
      </Pressable>
    </View>
  );
}
