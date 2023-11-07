import { getApiProduto } from "../default/conector";

export function findProdutoByCodBarra(codBarra){
    return getApiProduto(`product/${codBarra}.json`);
}