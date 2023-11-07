import { StyleSheet } from "react-native";
import Fonts from "../../../css/default/Fonts";
import Colors from "../../../css/default/Colors";

export const styles = (props) =>
  StyleSheet.create({
    icon: {
      position: "absolute",
      marginTop: props.height / 2,
      left: props.width - 60,
    },
    text: {
      marginLeft: 10,
      marginBottom: 2,
      fontFamily: Fonts.primaryFont,
      color: Colors.white,
    },
    input: {
      borderColor: props.isError ? Colors.error : Colors.primaryFontColor,
      borderBottomWidth: props.isError ? 2 : 0,
      borderTopWidth: props.isError ? 2 : 0,
      borderLeftWidth: props.isError ? 2 : 0,
      borderRightWidth: props.isError ? 2 : 0,
      backgroundColor: props.disable ? Colors.disable : Colors.white,
      width: props.width,
      height: props.height,
      borderRadius: 50,
      padding: 12,
      borderWidth: 0.2,
    },
  });