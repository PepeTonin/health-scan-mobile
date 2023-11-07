import { get } from "../default/conector";

export function buscarUltimosProdutos(idUsuario){
    return get(`produto-pesquisado/buscar-ultimos-produtos?idUsuario=${idUsuario}`);
}