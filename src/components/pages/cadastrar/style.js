import styled from "styled-components/native";
import Colors from "../../../css/default/Colors";
import { Button, Text } from "react-native-paper";
import Fonts from "../../../css/default/Fonts";

export const StyledContainer = styled.View`
  flex: 1px;
  background-color: ${Colors.backgroundColor};
  justify-content: center;
`;

export const StyledTopContainer = styled.View`
  margin-top: 60px;
  flex-direction: row;
`;

export const StyledContainerInterno = styled.View`
  margin-horizontal: 30px;
  justify-content: center;
  margin-bottom: 30px;
  flex: 1px;
`;

export const StyledTitle = styled(Text)`
  margin-left: 17%;
  color: ${Colors.primaryFontColor};
  font-family: ${Fonts.primaryFont};
  align-self: center;
  justify-content: flex-start;
`;

export const StyledButtonContainer = styled.View`
  margin-horizontal: 30px;
  margin-bottom: 40px;
  margin-top: 30pxx;
`;

export const StyledTextError = styled(Text)`
  margin-left: 20px;
  color: ${Colors.error};
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const StyledModalContainer = styled.View`
  background-color: ${Colors.backgroundColor};
  justify-content: center;
`;

export const StyledTopContainerModal = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StyledTitleModal = styled(Text)`
  margin-horizontal: 5%;
  color: ${Colors.primaryFontColor};
  font-family: ${Fonts.primaryFont};
  align-self: center;
  justify-content: flex-start;
`;

export const StyledBottonContainerModal = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-vertical: 20px;
`;
export const StyledButtonModal = styled(Button)`
  width: 140px;
  height: 38px;
  margin-horizontal: 12%;
  margin-top: 5px;
`;
export const StyledTextErrorModal = styled(Text)`
  margin-left: 10%;
  margin-bottom: 20px;
  color: ${Colors.error};
  font-family: ${Fonts.primaryFont};
  justify-content: flex-start;
`;
