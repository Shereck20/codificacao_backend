const filmes = [
    {id: 1, nome:"Jumanji"},
    {id: 2, nome:"Homem Aranha: Um novo dia"},
    {id: 3, nome:"Your Name"},
]

class FilmesService {
    getAll(){
        return filmes
    }
    
    getBYiD(id){
        return filmes.find(filmes => filmes.id === id)
    }
}

export const filmesService = new FilmesService()