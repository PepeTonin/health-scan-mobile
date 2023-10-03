import { Text, View } from "react-native";
import BackButton from "../../shared/BackButton/BackButton";
import BotaoSalvar from "../../shared/BotaoSalvar/BotaoSalvar";
import BotaoSalvar from "../../shared/BotaoSalvar/BotaoSalvar";

export default function Comparacao({ navigation }) {
  function backButtonHandler() {
    navigation.goBack();
  }
  function salvarHandler() {
    return;
  }
  return (
    <View>
      <View>
        <BackButton onPress={backButtonHandler} />
      </View>
      <View>
        <BotaoSalvar onPress={salvarHandler} />
      </View>
    </View>
  );
}
