import { StyledButtonContainer, StyledButtonOuterContainer, StyledButtonText, StyledTouchableOpacity } from "./style";

export default function BotaoSalvar({ onPress }) {
  return (
    <StyledButtonOuterContainer>
      <StyledTouchableOpacity>
        <StyledButtonText>
          SALVAR
        </StyledButtonText>
      </StyledTouchableOpacity>
    </StyledButtonOuterContainer>
  );
}
