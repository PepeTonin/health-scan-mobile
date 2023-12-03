import React, { useContext, useEffect, useState } from "react";
import ComparacoesSalvasItem from "../comparacoes-salvas-item/ComparacoesSalvasItem";
import {
  StyledEmptyImage,
  StyledEmptyText,
  StyledEmptyView,
  StyledScrollView,
} from "./style";
import { buscarUltimasComparacoes } from "../../../../service/server/comparacaoService";
import { AuthContext } from "../../../../contexts/auth";
import { View } from "react-native";
import InputText from "../../../shared/InputText/InputText";
import { useDebounce } from "../../../../utils/util";

export default function ComparacoesSalvas() {
  const [comparacoesSalvas, setComparacoesSalvas] = useState([]);
  const [inputText, setInputText] = useState("");

  const { isLogged, usuario, setUsuario, setIsLogged } = useContext(AuthContext);

  const searchQuery = useDebounce(inputText, 300)

  useEffect(() => {
    pesquisarComparacao();
  }, [searchQuery])

  function pesquisarComparacao(){
    const query = inputText.toLowerCase();

    buscarUltimasComparacoes(usuario.id, query)
      .then(item => {
        setComparacoesSalvas(item.data.result)
    })
  }

  return (
    <View>
      <InputText title={"Buscar"}
        value={inputText}
        onChangeText={setInputText} />

      <StyledScrollView>
        {comparacoesSalvas && comparacoesSalvas.length > 0 ? (
          comparacoesSalvas.map((item, i) => <ComparacoesSalvasItem key={i} comparacao={item} pesquisarComparacao={pesquisarComparacao}/>)
        ) : (
          <StyledEmptyView>
            <StyledEmptyImage source={require("../../../../assets/task.png")} />
            <StyledEmptyText>Sem comparações para mostrar</StyledEmptyText>
          </StyledEmptyView>
        )}
      </StyledScrollView>
    </View>
  );
}
