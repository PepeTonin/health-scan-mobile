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
    marginBottom: 50,
  },
  titulo: {
    color: Colors.white,
    fontFamily: Fonts.primaryFont,
    fontSize: 24,
  },
  tituloSecundario: {
    color: Colors.white,
    fontFamily: Fonts.primaryFont,
    fontSize: 18,
  },
  noImage:{
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 5,
    marginTop: 15,
    alignItems: 'center'
  },
  imagemTutorial:{
    width: 300,
    height: 200,
    borderRadius: 30,
    margin: 5,
    alignItems: 'center'
  },
  topContainer:{
    alignItems: 'center', 
  }
});
