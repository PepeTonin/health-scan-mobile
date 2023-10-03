import styled from "styled-components/native";
import Fonts from "../../../../css/default/Fonts";

export const StyledItemContainer = styled.ImageBackground`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: white;
  margin: 5px;
  text-align: center;
  align-items: center;
`;

export const StyledItemText = styled.Text`
  align-self: center;
  background-color: #000000c0;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  margin-top: 85px;
  font-family: ${Fonts.primaryFont};
`;
