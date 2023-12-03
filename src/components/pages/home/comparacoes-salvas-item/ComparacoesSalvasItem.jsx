import React from "react";
import { View } from "react-native";
import Fonts from "../../../../css/default/Fonts";
import ComparacoesSalvasItemDetalhe from "../comparacoes-salvas-item-detalhe/ComparacoesSalvasItemDetalhe";
import {
  StyledDetailContainer,
  StyledIconButton,
  StyledInfoView,
  StyledProductName,
  StyledSurface,
  StyledText,
  StyledTextTitle,
  StyledView,
} from "./style";
import { formatarData } from "../../../../utils/util";
import { deletarComparacaoById } from "../../../../service/server/comparacaoService";
import Colors from "../../../../css/default/Colors";

export default function ComparacoesSalvasItem(props) {

  function deletarComparacao(){
    deletarComparacaoById(props.comparacao.id)
    .then(()=>{
      props.pesquisarComparacao();
    })
  }

  return (
    <StyledSurface elevation={5}>
      <StyledView>
        <StyledTextTitle variant="bodyLarge">{props.comparacao.nome}</StyledTextTitle>
        <ComparacoesSalvasItemDetalhe
          style={{ marginTop: 10 }}
          nome={props.comparacao.produtoComparadoList[0].produto.nome}
          imagem={props.comparacao.produtoComparadoList[0].produto.image} />
        <ComparacoesSalvasItemDetalhe
          style={{ marginLeft: 40}}
          nome={props.comparacao.produtoComparadoList[1].produto.nome}
          imagem={props.comparacao.produtoComparadoList[1].produto.image} />
      </StyledView>
      <StyledInfoView>
          <StyledIconButton 
            size={30} 
            onPress={() => deletarComparacao()}
            iconColor={Colors.primaryFontColor} 
            icon="delete-outline" />
        <StyledDetailContainer>
          <StyledProductName>{props.comparacao.produtoComparadoList.length} produtos</StyledProductName>
          <StyledText style={{ fontFamily: Fonts.primaryFont }}>
            {formatarData(props.comparacao.dataHoraInc)}
          </StyledText>
        </StyledDetailContainer>
      </StyledInfoView>
    </StyledSurface>
  );
}
