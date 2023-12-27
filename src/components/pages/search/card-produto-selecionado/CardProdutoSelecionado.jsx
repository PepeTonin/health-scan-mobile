import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";
import Colors from "../../../../css/default/Colors";

export default function CardProdutoSelecionado({
  idProduto,
  nomeProduto,
  tratarCliqueBotao,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {nomeProduto}
        </Text>
      </View>
      <Pressable hitSlop={20} onPress={() => tratarCliqueBotao(idProduto)}>
        <AntDesign
          style={styles.icon}
          name="close"
          size={18}
          color={Colors.white}
        />
      </Pressable>
    </View>
  );
}
