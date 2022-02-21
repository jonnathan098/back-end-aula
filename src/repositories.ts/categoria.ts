import Categoria from "../models/categoria"
const repositoriesCategorias = {
    lertodas: () => {
        const Categoria: Categoria[] = [      
            {
                id: 0,
                nome:'bares',
            
            },
            {
                id:3,
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