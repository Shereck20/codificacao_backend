const estadios = [
    {id: 1, nome: "Santiago Bernabeu"},
    {id: 2, nome: "Camp Nou"},
    {id: 3, nome: "Old Trafford"},
    {id: 4, nome: "Allianz Arena"},
    {id: 5, nome: "San Siro"},
]

class estadiosServices {
    getAll(){
        return estadios
    }
}

export const EstadiosServices = new estadiosServices()