import express from "express"
import Categoria from "../models/categoria"

const routerCategoria = express.Router()

routerCategoria.get('/categorias', (req, res)=>{
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

    res.json(Categoria)
})
//endpoint para retornar os dados de uma categoria especifica
//req:pedido de emvio
//res:resposta
routerCategoria.get('/categorias/:id',(req, res) => {
    const categoria: Categoria={
        id:1,
        nome:'bares',
    }
    res.json(categoria)
})

export default routerCategoria