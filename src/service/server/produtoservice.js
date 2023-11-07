import { get } from "../default/conector";

export function filtrarProdutos(query){
    return get(`produto/filtrar-produtos?query=${query}`);
}