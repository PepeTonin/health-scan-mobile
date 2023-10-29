import { StyleSheet } from "react-native";
import Colors from "../../../../css/default/Colors";
import Fonts from "../../../../css/default/Fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primaryColorLight,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    maxWidth: 200,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.secondaryFont,
    textTransform: "capitalize",
    fontSize: 12,
  },
  icon: {
    marginLeft: 10,
  },
});
