import {
  StyledComparacoesSalvasItemDetalhe,
  StyledImage,
  StyledText,
} from "./style";

export default function ComparacoesSalvasItemDetalhe(props) {
  return (
    <StyledComparacoesSalvasItemDetalhe style={props.style}>
      <StyledImage
        source={
          props.imagem
            ? { uri: props.imagem }
            : require("../../../../assets/no-image.png")
        }/>
      <StyledText>{props.nome}</StyledText>
    </StyledComparacoesSalvasItemDetalhe>
  );
}
