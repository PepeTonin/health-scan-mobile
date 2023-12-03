import { StyleSheet } from "react-native";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  textoBotao: {
    fontFamily: Fonts.primaryFont,
    fontSize: 18,
  },
});
