import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import Fonts from "../../../../css/default/Fonts";
import styled from "styled-components/native"; // Importe o styled-components
import Colors from "../../../../css/default/Colors";

export const StyledComparacoesSalvasItemDetalhe = styled(View)`
  flex-direction: row;
  margin-top: 10px;
`;

export const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const StyledText = styled(Text)`
  margin-top: 5px;
  width: 120px;
  color: ${Colors.primaryFontColor};
  font-family: ${Fonts.primaryFont};
`;
