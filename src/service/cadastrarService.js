import { post } from "./default/conector";

export function cadastrarUsuario(data){
    return post("usuario/cadastrarUsuario", data);
}