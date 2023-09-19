import styled from "styled-components/native";
import { View } from "react-native";
import Colors from "../../../../css/default/Colors";
import { IconButton, Surface, Text } from "react-native-paper";
import Fonts from "../../../../css/default/Fonts";

export const StyledSurface = styled(Surface)`
  background-color: ${Colors.whiteLight};
  height: 180px;
  margin-vertical: 10px;
  border-radius: 30px;
  flex-direction: row;
`;

export const StyledText = styled(Text)`
  margin-vertical: 10px;
  max-height: 25px;
  font-family: ${Fonts.primaryFont};
`;

export const StyledView = styled(View)`
  margin-left: 20px;
  max-width: 160px;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin-top: 0;
  border-left-width: 0;
`;

export const StyledInfoView = styled(View)`
  align-items: flex-end;
  width: 150px;
  margin-top: 5px;
`;

export const StyledProductName = styled(Text)`
  max-height: 25px;
  font-family: ${Fonts.primaryFont};
`;

export const StyledDetailContainer = styled.View`
  margin-top: 60px;
  align-items: flex-end;
`;
