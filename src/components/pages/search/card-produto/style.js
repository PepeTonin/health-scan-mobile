import { StyleSheet } from "react-native";

import Fonts from "../../../../css/default/Fonts";
import Colors from "../../../../css/default/Colors";

export const styles = StyleSheet.create({
  container: {
    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.backgroundColorDark,
    flexDirection: "row",
    alignItems: "center"
  },
  pressableCardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 20,

    // TIRAR BACKGROUND COLOR QUANDO TIVER IMAGEM REAL
    backgroundColor: "#FF000033",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nomeProduto: {
    fontFamily: Fonts.primaryFont,
    textAlign: "left",
    color: Colors.primaryFontColor,
    fontSize: 18,
    marginBottom: 15,
  },
  descricao: {
    fontFamily: Fonts.primaryFont,
    color: Colors.primaryFontColor,
    textAlign: "left",
    fontSize: 12,
  },
});
