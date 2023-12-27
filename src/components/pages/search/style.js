import { StyleSheet } from "react-native";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  text: {
    fontFamily: Fonts.primaryFont,
    color: Colors.white,
    fontSize: 14,
    marginBottom: 6,
  },
  produtosSelecionadosContainer: {
    marginVertical: 20,
  },
  cardsProdutosSelecionadosContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardsProdutosContainer: {
    flex: 1,
    marginBottom: 20,
  },
  noDataImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
});
