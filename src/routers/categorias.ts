import express from "express"
import Categoria from "../models/categoria"
import repositoryCategorias from "../repositories.ts/categoria"
import repositoriesCategorias from "../repositories.ts/categoria"

const routerCategorias = express.Router()
//req:pedido de emvio
//res:resposta
routerCategorias.get('/categorias', (req, res)=>{

    const callbackGet = (categorias: Categoria[]) => {
        res.json(categorias)
    }

    repositoriesCategorias.lerTodas( callbackGet )
    
})

//endpoint para retornar os dados de uma categoria especifica
routerCategorias.get('/categorias/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)
	const lerCallback = (categoria: Categoria) => {
		res.json(categoria)
	}

	repositoryCategorias.ler(id, lerCallback)
})

export default routerCategorias











// const id: number = +req.params.id // ou number.parseint(req.params.id)
    //const categoria: Categoria = repositoriesCategorias.ler(1)