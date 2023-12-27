import React from "react";
import ProdutosPesquisadosItem from "../produtos-pesquisados-item/ProdutosPesquisadosItem";
import { StyledEmptyImage, StyledEmptyView, StyledScrollView } from "./style";

export default function ProdutosPesquisados(props) {

  return props.produtos && props.produtos.length > 0 ? (
    <StyledScrollView horizontal>
      {props.produtos.map((item, i) => (
        <ProdutosPesquisadosItem 
          produto={item} 
          key={i} 
          navegarInfoProduto={props.navegarInfoProduto}/>
      ))}
    </StyledScrollView>
  ) : (
    <StyledEmptyView>
      <StyledEmptyImage source={require("../../../../assets/no-data.png")} />
    </StyledEmptyView>
  );
}
