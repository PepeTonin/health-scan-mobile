import { Text, View } from "react-native";
import BackButton from "../../shared/BackButton/BackButton";
import BotaoSalvar from "../../shared/BotaoSalvar/BotaoSalvar";
import BotaoSalvar from "../../shared/BotaoSalvar/BotaoSalvar";
import PrimaryButton from "../../shared/PrimaryButton";

export default function Comparacao({ navigation }) {
  function backButtonHandler() {
    navigation.goBack();
  }

  function salvarHandler() {
    return;
  }

  function escanearHandler() {
    navigation.navigate("Scan");
  }

  function pesquisarHandler() {
    navigation.navigate("Search");
  }

  function informacoesHandler(){
    navigation.navigate("Info")
  }

  return (
    <View>
      <View>
        <BackButton onPress={backButtonHandler} />
      </View>
      <View>
        <BotaoSalvar onPress={salvarHandler} />
      </View>
      <View>
        <PrimaryButton onPress={escanearHandler}>ESCANEAR</PrimaryButton>
        <PrimaryButton onPress={pesquisarHandler}>PESQUISAR</PrimaryButton>
        <PrimaryButton onPress={informacoesHandler}>INFORMACOES DE UM ITEM</PrimaryButton>
      </View>
    </View>
  );
}
