import { Text, View } from "react-native";
import BackButton from "../../shared/BackButton/BackButton";
import BotaoSalvar from "../../shared/BotaoSalvar/BotaoSalvar";

export default function Comparacao({navigation}) {
  function backButtonHandler() {
    navigation.goBack()
  }
  return (
    <View>
      <View>
        <BackButton onPress={backButtonHandler} />
      </View>
      <View>
        <BotaoSalvar onPress={} />
      </View>
    </View>
  );
}
