import { Text } from "react-native-paper";
import { StyledContainer, StyledContainerInterno } from "./style";
import BackButton from "../../shared/BackButton/BackButton";

export default function Info({ navigation }) {
  function backButtonHandler() {
    navigation.goBack();
  }

  return (
    <StyledContainer>
      <StyledContainerInterno>
        <BackButton onPress={backButtonHandler} />
        <Text>INFO DE 1 ITEM</Text>
      </StyledContainerInterno>
    </StyledContainer>
  );
}
