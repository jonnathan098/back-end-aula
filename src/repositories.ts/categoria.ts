import Categoria from "../models/categoria"
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