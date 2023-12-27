import { useState } from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./style";
import PrimaryButton from "../../../shared/PrimaryButton/PrimaryButton";

export default function AdicionarNovoProduto({
  handleAdicionarNovoProduto,
  handlerEscanearNovoProduto,
}) {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={styles.textoMaior}>Selecione o próximo produto</Text>
        <Text style={styles.textoMenor}>
          Use a camera para escanear o código de barras ou pesquise um novo
          produto
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={handleAdicionarNovoProduto}>
          Adicionar produto
        </PrimaryButton>
        <PrimaryButton onPress={handlerEscanearNovoProduto}>
          Escanear produto
        </PrimaryButton>
      </View>
    </View>
  );
}
