import { StyleSheet } from "react-native";

import Colors from "../../../../css/default/Colors";
import Fonts from "../../../../css/default/Fonts";

export const styles = StyleSheet.create({
  containerExterno: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray_200,
    borderStyle: "dashed",
    marginBottom: 20,
  },
  
  imageInfoContainer: {
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,

    // TIRAR BACKGROUND COLOR QUANDO TIVER IMAGEM REAL
    backgroundColor: "#FF000033",
  },
  alergicosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  notaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  textoNota: {
    marginLeft: 10,
    fontFamily: Fonts.primaryFont,
    fontSize: 22,
  },
  positivo: {
    color: Colors.primaryColorLight,
  },
  negativo: {
    color: Colors.error,
  },
  textoNormal: {
    color: Colors.white,
    fontFamily: Fonts.primaryFont,
    fontSize: 18,
    marginRight: 10,
  },
  titulo: {
    color: Colors.white,
    fontFamily: Fonts.primaryFont,
    fontSize: 24,
  },
  textoDestaque: {
    color: Colors.gray_200,
    fontFamily: Fonts.primaryFont,
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
  },
  itemTabelaNutricionalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: Colors.gray_200,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
  },
});
