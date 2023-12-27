import styled from 'styled-components/native';
import Colors from '../../../css/default/Colors';
import { Text, Button, Divider } from 'react-native-paper'
import Fonts from '../../../css/default/Fonts';

export const StyledContainer = styled.View`
    flex: 1px;
    background-color: ${Colors.backgroundColor};
    justify-content: center;
`

export const StyledContainerInterno = styled.View`
    margin-horizontal: 30px;
`

export const StyledTitle = styled(Text)`
    color: ${Colors.primaryFontColor};
    font-family: ${Fonts.primaryFont};
`

export const StyledInputContainer = styled.View`
    margin-top: 20px;
`

export const StyledDividerEspacado = styled(Divider)`
    margin-vertical: ${Platform.OS === 'ios' ? '15px' : '60px'};
`

export const StyledTextoBranco = styled(Text)`
    text-align: right;
    color: ${Colors.primaryFontColorButton};
    font-family: ${Fonts.primaryFont};
`

export const StyledCardContainer = styled.View`
    background-color: ${Colors.primaryButtonColor};
    height: 150px;
    margin-top: 30px;
    border-radius: 20px;
    flex-direction: row;
    padding-horizontal: 30px;
    align-items: center;
`

export const StyledLogo = styled.Image`
    width: 100px;
    height: 118px;
`

export const StyledTextGeral = styled(Text)`
    color: ${Colors.primaryButtonColor};
    font-family: ${Fonts.primaryFont};
`
export const StyledButtonCard = styled(Button)`
    height: 38px;
    margin-top: 5px;
`

export const StyledButtonContainer = styled.View`
    margin-top: 30px;
`