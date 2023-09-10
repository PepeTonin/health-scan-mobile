import * as SQLite from "expo-sqlite";

function openDatabase() {
  const db = SQLite.openDatabase("health-scan-db.db");
  return db;
}

export function query(sql, params) {
  return new Promise((resolve, reject) => {
    const db = openDatabase();
    db.transaction((tx) => {
      tx.executeSql(
        sql,
        params,
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => reject(error)
      );
    });
  });
}

export function createDatabase() {
  query(
    `
    create table if not exists USUARIO(
        IDUSUARIO INT PRIMARY KEY NOT NULL,
        NOME VARCHAR(255),
        EMAIL VARCHAR(255),
        LOGIN VARCHAR(45),
        TOKEN VARCHAR(45)
    )
  `,
    []
  );
}
