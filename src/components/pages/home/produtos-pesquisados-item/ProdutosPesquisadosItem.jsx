import React from "react";
import { StyledItemContainer, StyledItemText } from "./style";

export default function ProdutosPesquisadosItem(props) {
  return (
    <StyledItemContainer
      source={
        props.produto.image
          ? { uri: props.produto.image }
          : require("../../../../assets/no-image.png")
      }
      resizeMode="cover"
      imageStyle={{ borderRadius: 30 }}
    >
      <StyledItemText>{props.produto.nome.toUpperCase() + ""}</StyledItemText>
    </StyledItemContainer>
  );
}
