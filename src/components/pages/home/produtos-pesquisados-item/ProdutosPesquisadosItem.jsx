import React from "react";
import { StyledItemContainer, StyledItemText } from "./style";
import { TouchableOpacity } from "react-native";

export default function ProdutosPesquisadosItem(props) {
  return (
    <TouchableOpacity onPress={() => { props.navegarInfoProduto(props.produto.codBarra) }}>
      <StyledItemContainer
        source={
          props.produto.imagemProduto
            ? { uri: props.produto.imagemProduto }
            : require("../../../../assets/no-image.png")
        }
        resizeMode="cover"

        imageStyle={{ borderRadius: 30 }}
      >
        <StyledItemText>{props.produto.descricaoProduto ? props.produto.descricaoProduto.toUpperCase() : "---" + ""}</StyledItemText>
      </StyledItemContainer>
    </TouchableOpacity>
  );
}
