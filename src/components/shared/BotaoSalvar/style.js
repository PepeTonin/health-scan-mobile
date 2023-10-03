import styled from "styled-components/native";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

export const StyledButtonOuterContainer = styled.View`
  flex: 1;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${Colors.primaryButtonColor};
  border-radius: 5px;
  padding: 5px;
`;

export const StyledButtonText = styled.Text`
  font-family: ${Fonts.primaryFont};
  font-size: 12px;
  color: ${Colors.white};
`;
