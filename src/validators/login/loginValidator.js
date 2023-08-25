export function validate(obj){
    let valido = {
        isValido: true,
        mensagem: "",
        campo: null
    }
    
    if(!obj.login || obj.login == "") {
        valido.isValido = false;
        valido.mensagem = "O login digitado não é valido!";
        valido.campo = "login";
        return valido;
    }

    if(!obj.senha || obj.senha == "" || obj.senha.length < 8){
        valido.isValido = false;
        valido.mensagem = "A senha digitada não é uma senha valida!";
        valido.campo = "senha";
        return valido;
    }

    return valido;
}