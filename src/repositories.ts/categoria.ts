import Categoria from "../models/categoria"
import database from "./dadabese"
const repositoriesCategorias = {
    lertodas: () => {
        const Categoria: Categoria[] = [      
            {
                id: 1,
                nome:'bares',
            
            },
            {
                id:2,
                nome:'restaurantes',
            },
        ]
   const sql = 'select * from categoria'

     database.all(sql, (err, rows) => {
          console.log(rows)
     })

     return Categoria

    },

    ler: (id: number) => {
        const categoria: Categoria={
            id:1,
            nome:'bares',
        }
        return categoria
    },
}

export default  repositoriesCategorias