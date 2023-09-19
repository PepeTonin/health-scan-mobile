import styled from "styled-components/native";
import Fonts from "../../../../css/default/Fonts";
import Colors from "../../../../css/default/Colors";

export const StyledScrollView = styled.ScrollView`
  margin: 10px;
  height: 400px;
`;

export const StyledEmptyView = styled.View`
  height: 200px;
  align-items: center;
`;

export const StyledEmptyImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const StyledEmptyText = styled.Text`
  font-family: ${Fonts.primaryFont};
  color: ${Colors.primaryFontColorButton};
`;
