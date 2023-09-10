import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../css/default/Colors";
import Fonts from "../../css/default/Fonts";

export default function CountDown(props) {
  const [count, setCount] = useState(props.initialTime);
  let lCount = props.initialTime;

  useEffect(() => {
    setTimeout(countdown, 1000);
  }, [1]);

  function countdown() {
    if (lCount > 0 && count > 0) {
      lCount = lCount - 1;
      setCount(lCount);
      setTimeout(countdown, 1000);
    } else {
      props.onFinish();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count + "s"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 18,
    marginTop: 7,
  },
  text: {
    fontFamily: Fonts.primaryFont,
    color: Colors.primaryFontColor,
  },
});
