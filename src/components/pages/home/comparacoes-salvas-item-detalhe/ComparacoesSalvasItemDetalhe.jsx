import {
  StyledComparacoesSalvasItemDetalhe,
  StyledImage,
  StyledText,
} from "./style";

export default function ComparacoesSalvasItemDetalhe(props) {
  return (
    <StyledComparacoesSalvasItemDetalhe style={props.style}>
      <StyledImage source={require("../../../../assets/no-image.png")} />
      <StyledText>Produto y</StyledText>
    </StyledComparacoesSalvasItemDetalhe>
  );
}
