import { Button } from "react-native-paper";
import { StyledButtonContainer } from "./style";

export default function BotaoSalvar ({onPress}) {
    <StyledButtonContainer>
            <Button
              textColor={Colors.primaryFontColorButton}
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={onPress}
            >
              SALVAR
            </Button>
        </StyledButtonContainer>
}