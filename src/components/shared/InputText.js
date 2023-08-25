import { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { IconButton } from 'react-native-paper';
import Colors from '../../css/default/Colors';

export default function InputText(props) {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <View>
      <Text style={styles(props).text}>{props.title}</Text>

      <TextInput
        secureTextEntry={props.isPassword && isPassword}
        style={styles(props).input}
        {...props} />

      {props.isPassword ? (
        <IconButton
          icon="eye"
          style={styles(props).icon}
          onPress={() => setIsPassword(!isPassword)} />
      ) : null}

    </View>
  );
}

const styles = (props) => StyleSheet.create({
  icon: {
    position: 'absolute',
    marginTop: (props.height / 2) + 3,
    left: props.width - 60
  },
  text: {
    marginLeft: 10,
    marginBottom: 2,
    color: "white"
  },
  input: {
    borderColor: Colors.error,
    borderBottomWidth: props.isError ? 5 : 0,
    backgroundColor: "white",
    width: props.width,
    height: props.height,
    borderRadius: 50,
    padding: 12,
    borderWidth: 0.2,
  },
});