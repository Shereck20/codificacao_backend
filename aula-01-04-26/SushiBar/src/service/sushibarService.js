const sushis = [
    { id: 1, nome: "nirigi"},
    { id: 2, nome: "maki"},
    { id: 3, nome: "uramaki"},
    { id: 4, nome: "temaki"},
    { id: 5, nome: "gunkan"},
]

class sushibarServices {
    getAll(){
        return sushis
    }

    getById(id){
        return sushis.find(f => f.id === id)
    }


create(nome) {
    const newSushi = {
        id: sushis.length > 0 ? sushis[sushis.length - 1].id + 1 : 1,
        nome
    }
    sushis.push(newSushi)

    return newSushi
  }

updatePatch(id, nome) {
    const index = sushis.findIndex((f) => f.id === parseInt(id));
    if (index === -1) return null;
    if (nome){
        sushis[index].nome = nome;
    }
    return sushis[index];
  }

delete(id) {
    const index = sushis.findIndex((f) => f.id === parseInt(id));
    if (index === -1) return false;

    return sushis.splice(index, 1);
    return true;
  }

}

export const sushibarService = new sushibarServices()
