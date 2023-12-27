import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

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
