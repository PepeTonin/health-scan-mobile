import { Text, View } from "react-native";
import PrimaryButton from "../../shared/PrimaryButton";

export default function Search({ navigation }) {
  function compararHandler() {
    navigation.navigate("Comparar");
  }

  return (
    <View>
      <Text>SEARCH PAGE</Text>
      <PrimaryButton onPress={compararHandler}>COMPARAR</PrimaryButton>
    </View>
  );
}
