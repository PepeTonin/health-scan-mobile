import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import InputText from "../../shared/InputText";
import ProdutosPesquisados from "./produtos-pesquisados/ProdutosPesquisados";
import ComparacoesSalvas from "./comparacoes-salvas/ComparacoesSalvas";
import { AuthContext } from "../../../contexts/auth";
import { buscarUltimosProdutos } from "../../../service/produtoPesquisadoService";
import { StyledContainer, StyledSubtitle, StyledTitle } from "./style";

export default function Home() {
  const { isLogged, usuario, setUsuario, setIsLogged } = useContext(AuthContext);

  const [produtosPesquisados, setProdutosPesquisados] = useState([]);

  useEffect(() => {
    buscarProdutosPesquisados();
  }, [1]);

  function buscarProdutosPesquisados() {
    buscarUltimosProdutos(usuario.id)
      .then((val) => {
        setProdutosPesquisados(val.data.result.content);
      });
  }

  return (
    <StyledContainer>
      <StyledTitle>Ultimos produtos pesquisados</StyledTitle>
      <ProdutosPesquisados produtos={produtosPesquisados} />
      <View>
        <StyledSubtitle>Suas comparações salvas</StyledSubtitle>
        <InputText title={"Buscar"}/>
        <ComparacoesSalvas />
      </View>
    </StyledContainer>
  );
}
