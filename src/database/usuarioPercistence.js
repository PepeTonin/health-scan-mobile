import { query } from "./default/database";

export function inserirUsuario(data) {
  const sql = `
        INSERT INTO USUARIO (IDUSUARIO, NOME, EMAIL, LOGIN, TOKEN) 
        values (?, ?, ?, ?, ?)
    `;

  return query(sql, data);
}

export function buscarUsuario() {
  const sql = `
        SELECT * FROM USUARIO
    `;

  return query(sql, null);
}

export function removerUsuario() {
  const sql = `
        DELETE FROM USUARIO
    `;

  return query(sql, null);
}
