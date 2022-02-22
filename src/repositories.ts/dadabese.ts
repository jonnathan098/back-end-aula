import { Console } from 'console'
import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_Categoria_CREATE = `
    CREATE TABLE Categoria (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_Categoria_CREATE, (err) => {
            if (err) {
                console.error(err)
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela Categoria criada com sucesso.')
            }
        })
    }
})

export default database