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
  StyledView,
} from "./style";

export default function ComparacoesSalvasItem() {
  return (
    <StyledSurface elevation={5}>
      <StyledView>
        <StyledText variant="bodyLarge">Nome da comparação</StyledText>
        <ComparacoesSalvasItemDetalhe style={{ marginTop: 10 }} />
        <ComparacoesSalvasItemDetalhe style={{ marginLeft: 40 }} />
      </StyledView>
      <StyledInfoView>
        <View>
          <StyledIconButton size={25} iconColor="black" icon="delete-outline" />
        </View>
        <StyledDetailContainer>
          <StyledProductName>5 produtos</StyledProductName>
          <StyledText style={{ fontFamily: Fonts.primaryFont }}>
            01/11/2023 13:58
          </StyledText>
        </StyledDetailContainer>
      </StyledInfoView>
    </StyledSurface>
  );
}
