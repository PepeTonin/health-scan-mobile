import { StyleSheet } from "react-native";
import Colors from "../../../../css/default/Colors";
import Fonts from "../../../../css/default/Fonts";

export const styles = StyleSheet.create({
  rootContainer: {
    paddingBottom: 40,
    paddingTop: 10,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoMaior:{
    color: Colors.primaryColorLight,
    fontFamily: Fonts.primaryFont,
    fontSize: 24,
  },
  textoMenor:{
    color: Colors.gray_200,
    fontFamily: Fonts.primaryFont,
    fontSize: 12,
  }

});
