const estudantes = [
    {id: 1, nome: "André"},
    {id: 2, nome: "Luis"},
    {id: 3, nome: "João"}
]

class EstudantesServices {
    getAll(){
        return estudantes
    }

    getById(){
    
    }
}

export const estudantesServices = new EstudantesServices()