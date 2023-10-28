import React, { useState } from "react";
import ComparacoesSalvasItem from "../comparacoes-salvas-item/ComparacoesSalvasItem";
import {
  StyledEmptyImage,
  StyledEmptyText,
  StyledEmptyView,
  StyledScrollView,
} from "./style";

export default function ComparacoesSalvas() {
  const [comparacoesSalvas, setComparacoesSalvas] = useState([]);

  return (
    <StyledScrollView>
      {comparacoesSalvas && comparacoesSalvas.length > 0 ? (
        comparacoesSalvas.map((item, i) => <ComparacoesSalvasItem key={i} />)
      ) : (
        <StyledEmptyView>
          <StyledEmptyImage source={require("../../../../assets/task.png")} />
          <StyledEmptyText>Sem comparações para mostrar</StyledEmptyText>
        </StyledEmptyView>
      )}
    </StyledScrollView>
  );
}
