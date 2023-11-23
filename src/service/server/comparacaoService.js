import { del, get } from "../default/conector";

export function buscarUltimasComparacoes(idUsuario, query){
    return get(`comparacao/buscar-ultimas-comparacoes?idUsuario=${idUsuario}&query=${query}`);
}

export function deletarComparacaoById(idComparacao){
    return del(`comparacao/deletar-comparacao/${idComparacao}`);
}