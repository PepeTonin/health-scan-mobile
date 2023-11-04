import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";

import { styles } from "./style";
import PrimaryButton from "../../shared/PrimaryButton";
import InputText from "../../shared/InputText";
import CardProdutoSelecionado from "./card-produto-selecionado/CardProdutoSelecionado";
import CardProduto from "./card-produto/CardProduto";

import { filtrarProdutos } from "../../../service/produtoservice";
import { useDebounce } from "../../../utils/util";

export default function Search({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [produtosMostrados, setProdutosMostrados] = useState([]);
  const [produtosParaComparacao, setProdutosParaComparacao] = useState([]);
  const searchQuery = useDebounce(inputText, 300)

  useEffect(() => {
    const query = inputText.toLowerCase();
    filtrarProdutos(query).then((result) => {
      setProdutosMostrados(result.data.result.content);
    });
  }, [searchQuery])

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
        onChangeText={setInputText}
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
        {!produtosMostrados || produtosMostrados.length == 0
          ? <Image source={require("../../../assets/no-data.png")} style={{ width: 200, height: 200, alignSelf: 'center' }} />
          : <FlatList
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
          />}
      </View>

      <PrimaryButton onPress={compararHandler}>COMPARAR</PrimaryButton>
    </View>
  );
}
