import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";
import Colors from "../../css/default/Colors";
import Fonts from "../../css/default/Fonts";

export default function InputText(props) {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <View>
      <Text style={styles(props).text}>{props.title}</Text>

      <TextInput
        value={props.value}
        secureTextEntry={props.isPassword && isPassword}
        editable={!props.disable}
        style={styles(props).input}
        onChangeText={props.onChangeText}
        {...props}
      />

      {props.isPassword ? (
        <IconButton
          icon="eye"
          style={styles(props).icon}
          onPress={() => setIsPassword(!isPassword)}
        />
      ) : null}
    </View>
  );
}

const styles = (props) =>
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
