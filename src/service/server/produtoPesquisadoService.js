import { get, post } from "../default/conector";

export function buscarUltimosProdutos(idUsuario){
    return get(`produto-pesquisado/buscar-ultimos-produtos?idUsuario=${idUsuario}`);
}

export function saveProdutoPesquisado(produto){
    return post(`produto-pesquisado/save`, produto);
}
