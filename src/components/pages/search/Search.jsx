import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

import { styles } from "./style";
import PrimaryButton from "../../shared/PrimaryButton";
import InputText from "../../shared/InputText";
import CardProdutoSelecionado from "./card-produto-selecionado/CardProdutoSelecionado";
import CardProduto from "./card-produto/CardProduto";

import { produtos } from "../../../fakeData/fakeData";

export default function Search({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [produtosMostrados, setProdutosMostrados] = useState([]);
  const [produtosParaComparacao, setProdutosParaComparacao] = useState([]);

  function compararHandler() {
    if (produtosParaComparacao.length < 2) {
      Alert.alert(
        "Itens insuficientes para comparação",
        "Selecione pelo menos dois itens para comparar"
      );
      return;
    }
    const params = [...produtosParaComparacao];
    setInputText("");
    setProdutosMostrados([]);
    setProdutosParaComparacao([]);
    navigation.navigate("Comparar", params);
  }

  function infoProdutoHandler(idDoProduto) {
    navigation.navigate("Info", idDoProduto);
  }

  function onChangeTextHandler(inputText) {
    setInputText(inputText);
    if (inputText.length === 0) {
      setProdutosMostrados([]);
    } else {
      setProdutosMostrados(
        produtos.filter((produto) =>
          produto.nome.toLowerCase().includes(inputText.toLowerCase())
        )
      );
    }
  }

  function adicionarProdutoComparacao(idDoProduto, nomeDoProduto) {
    if (produtosParaComparacao.find((item) => item.id === idDoProduto)) {
      Alert.alert("Produto já foi selecionado", "Selecione outro.");
      return;
    }
    setProdutosParaComparacao([
      ...produtosParaComparacao,
      { id: idDoProduto, nome: nomeDoProduto },
    ]);
  }

  function removerProdutoComparacao(idDoProduto) {
    setProdutosParaComparacao(
      produtosParaComparacao.filter((produto) => produto.id !== idDoProduto)
    );
  }

  return (
    <View style={styles.rootContainer}>
      <InputText
        value={inputText}
        onChangeText={onChangeTextHandler}
        title={"PESQUISAR"}
      />

      <View style={styles.produtosSelecionadosContainer}>
        <Text style={styles.text}>PRODUTOS SELECIONADOS PARA COMPARAR:</Text>
        <View style={styles.cardsProdutosSelecionadosContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={produtosParaComparacao}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardProdutoSelecionado
                nomeProduto={item.nome}
                idProduto={item.id}
                tratarCliqueBotao={removerProdutoComparacao}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.cardsProdutosContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={produtosMostrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardProduto
              idDoProduto={item.id}
              urlImagemDoProduto={item.image}
              nomeDoProduto={item.nome}
              descricaoDoProduto={item.descricao}
              tratarCliqueBotao={adicionarProdutoComparacao}
              tratarCliqueCard={infoProdutoHandler}
            />
          )}
        />
      </View>

      <PrimaryButton onPress={compararHandler}>COMPARAR</PrimaryButton>
    </View>
  );
}
