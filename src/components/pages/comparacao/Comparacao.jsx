import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import InfoItem from "../informacoesUmItem/InfoItem/InfoItem";
import { styles } from "./style";
import BackButton from "../../shared/BackButton/BackButton";
import AdicionarNovoProduto from "./adicionar-novo-produto/adicionar-novo-produto";
import CameraModal from "../scan/modal/cameraModal/CameraModal";

export default function Comparacao({ navigation, route }) {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [visibleScan, setVisibleScan] = useState(false);

  useEffect(() => {
    console.log(route.params);
    const itensParaComparacao = route.params.itensParaComparacao;
    setListaProdutos(itensParaComparacao);
  }, []);

  function backButtonHandler() {
    navigation.goBack();
  }

  function handleScanCodigoBarra(data) {
    setListaProdutos([
      ...listaProdutos,
      { codBarra: data, id: data, nome: "produto advindo da camera" },
    ]);
  }

  function mudarVisibilidadeDoCameraModal() {
    setVisibleScan(() => !visibleScan);
  }

  function handleAdicionarNovoProduto() {
    const params = { produtosEmComparacao: [...listaProdutos] };
    navigation.navigate("PesquisarComparar", params);
  }

  return (
    <PaperProvider>
      <CameraModal
        visible={visibleScan}
        setVisibleScan={setVisibleScan}
        abrirInfoProduto={handleScanCodigoBarra}
      />
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <BackButton onPress={backButtonHandler} />
          <Text style={styles.titulo}>Comparação de Produtos</Text>
          <View style={styles.placeholderView}></View>
        </View>
        <FlatList
          data={listaProdutos}
          keyExtractor={(_, i) => i}
          renderItem={(item) => (
            <>
              <View style={{ marginTop: 20 }}></View>
              <InfoItem codBarra={item.item.codBarra} />
            </>
          )}
          ListFooterComponent={() => (
            <AdicionarNovoProduto
              handleAdicionarNovoProduto={handleAdicionarNovoProduto}
              handlerEscanearNovoProduto={mudarVisibilidadeDoCameraModal}
            />
          )}
        />
      </View>
    </PaperProvider>
  );
}
