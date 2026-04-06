const PP = [
    { id: 1, nome: "pera"},
    { id: 2, nome: "uva"}
]

class PPservice {
    getall(){
        return PP
    }
    getById(id){
        return PP.find((pp) => pp.id === parseInt(id))
    }

    create(nome){
        const newPP = {
            id: PP.length > 0 ? PP[PP.length - 1].id + 1 : 1,
            nome
        }
        PP.push(newPP)
        return newPP
    }

    updatePatch(id, nome){
        const index = PP.findIndex((pp) => pp.id === parseInt(id))
        if (index === -1) return null
        if(nome){
            PP[index].nome = nome
        }
        return PP[index]

    }

    updatePut(id, newData){
        const index = PP.findIndex((pp) => pp.id === parseInt(id))
        if (index === -1) return null
        const updatedPP = {
            id: parseInt(id), ...newData
        }
        PP[index] = updatedPP
        return updatedPP    
    }

    delete(id){
        const index = PP.findIndex((pp) => pp.id === parseInt(id))
        if (index === -1) return false
        return PP.splice(index, 1)
        return true
    }
}

export const PPService = new PPservice();