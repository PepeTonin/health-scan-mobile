import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "./style";

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