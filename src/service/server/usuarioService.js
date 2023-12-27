import { post } from "../default/conector";

export function cadastrarUsuario(data){
    return post("usuario/cadastrar-usuario", data);
}

export function validarCodigoEmail(data){
    return post("usuario/validar-codigo", data);
}

export function logar(data){
    return post("usuario/logar", data);
}

export function enviarEmailRecuperacao(data){
    return post("usuario/enviar-email-recuperacao", data);
}

export function cadastrarNovaSenha(data){
    return post("usuario/cadastrar-nova-senha", data);
}

export function logarToken(data){
    return post("usuario/logar-token", data);
}

export function reenviarEmailValidacao(data){
    return post("usuario/reenviar-email-validacao", data)
}