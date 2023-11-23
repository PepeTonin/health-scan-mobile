import { View, Text } from "react-native";
import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import InfoItem from "./InfoItem/InfoItem";

export default function Info({ navigation, route }) {

  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <BackButton onPress={backButtonHandler} />
        <Text style={styles.titulo}>Informações do produto</Text>
        <View style={styles.placeholderView}></View>
      </View>
      <InfoItem codBarra={route.params}/>
    </View>
  );
}
