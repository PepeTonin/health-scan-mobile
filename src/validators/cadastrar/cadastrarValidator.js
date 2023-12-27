export function validate(obj) {
  let valido = {
    isValido: true,
    mensagem: "",
    campo: null,
  };

  if (!obj.login || obj.login == "") {
    valido.isValido = false;
    valido.mensagem = "O campo de login precisa ser preenchido";
    valido.campo = "login";

    return valido;
  }

  if (!obj.email || obj.email == "") {
    valido.isValido = false;
    valido.mensagem = "O campo de email precisa ser preenchido";
    valido.campo = "email";

    return valido;
  }

  const re = /\S+@\S+\.\S+/;
  if (!re.test(obj.email)) {
    valido.isValido = false;
    valido.mensagem = "O email inserido não é um endereço valido";
    valido.campo = "email";

    return valido;
  }

  return validarSenha(obj);
}

export function validarSenha(obj) {
  let valido = {
    isValido: true,
    mensagem: "",
    campo: null,
  };

  if (!obj.senha || obj.senha == "") {
    valido.isValido = false;
    valido.mensagem = "O campo de senha precisa ser preenchido";
    valido.campo = "senha";

    return valido;
  }

  if (obj.senha.length < 8) {
    valido.isValido = false;
    valido.mensagem = "A senha precisa ter no minimo 8 caracteres";
    valido.campo = "senha";

    return valido;
  }

  const reSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (!reSenha.test(obj.senha)) {
    valido.isValido = false;
    valido.mensagem =
      "A senha precisa ter 8 caracteres ou mais com pelo menos uma letra maiuscula, uma letra minuscula, um numero e um simbolo";
    valido.campo = "senha";

    return valido;
  }

  if (!obj.confirmarSenha || obj.confirmarSenha == "") {
    valido.isValido = false;
    valido.mensagem = "O campo de confirmar senha precisa ser preenchido";
    valido.campo = "confirmarsenha";

    return valido;
  }

  if (obj.senha != obj.confirmarSenha) {
    valido.isValido = false;
    valido.mensagem =
      "A senha de confirmação precisa ser igual a senha digitada";
    valido.campo = "confirmarsenha";

    return valido;
  }

  return valido;
}
