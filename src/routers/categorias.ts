import express from "express"
import Categoria from "../models/categoria"
import repositoriesCategorias from "../repositories.ts/categoria"

const routerCategoria = express.Router()
//req:pedido de emvio
//res:resposta
routerCategoria.get('/categorias', (req, res)=>{
    const Categoria: Categoria[] = repositoriesCategorias.lertodas()

    res.json(Categoria)
})
//endpoint para retornar os dados de uma categoria especifica
routerCategoria.get('/categorias/:id',(req, res) => {
    const id: number = +req.params.id // ou number.parseint(req.params.id)
    const categoria: Categoria = repositoriesCategorias.ler(1)
    res.json(categoria)
})

export default routerCategoria