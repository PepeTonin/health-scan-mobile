import { StyleSheet } from "react-native";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titulo: {
    color: Colors.white,
    fontFamily: Fonts.primaryFont,
    fontSize: 24,
  },
  noImage:{
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 5,
    alignItems: 'center'
  },
  bottomContainer:{
    alignItems: 'center', 
  }
});
