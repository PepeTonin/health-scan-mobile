import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("health-scan-db.db");
  return db;
}

export function query(sql, params) {
  const db = openDatabase();

  db.transaction((tx) => {
    tx.executeSql(sql, params, (_, { rows: { _array } }) => {
      return _array;
    });
  });
}

export function createDatabase(){
  query(`
    create table if not exists usuario(
        IDUSUARIO INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        NOME VARCHAR(255),
        EMAIL VARCHAR(255),
        LOGIN VARCHAR(45),
        TOKEN VARCHAR(45),
        STATUS VARCHAR(1),
    )
  `, [])
}