import styled from "styled-components/native";
import Colors from "../../../css/default/Colors";
import Fonts from "../../../css/default/Fonts";

export const StyledContainer = styled.View`
  background-color: ${Colors.backgroundColor};
  flex: 1;
  padding: 20px;
`;

export const StyledTitle = styled.Text`
  color: white;
  font-family: ${Fonts.primaryFont};
  font-size: 20px;
`;

export const StyledSubtitle = styled.Text`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px; 
  font-size: 20px;
  font-family: ${Fonts.primaryFont};
`;
