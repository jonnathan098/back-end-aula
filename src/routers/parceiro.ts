import express from "express"
import parceiro from "../models/parceiro"

const Routerparceiro = express.Router()

Routerparceiro.get('/parceiro', (req, res)=>{
        const parceiro: parceiro[] = [
                {   
                nome:'loja1',
                id:1,
                urlmg:'imagem1',
                local:'rua um',
                estado:'sao paulo',
                urlgoogleMaps:'wwww',
            },
            {
                nome:'loja2',
                id:2,
                urlmg:'imagem2',
                local:'rua dois',
                estado:'sao paulo',
                urlgoogleMaps:'wwww1',
            },
            
        ]
        res.json(parceiro)
    })
    Routerparceiro.get('/parceiro/:oi',(req, res) => {
        const parceiro: parceiro={
                nome:'loja1',
                id:1,
                urlmg:'imagem1',
                local:'rua um',
                estado:'sao paulo',
                urlgoogleMaps:'wwww',
            }
            res.json(parceiro)
    })
    
    
    export default Routerparceiro
