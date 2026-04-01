const pizzas = [
    { id: 1, nome: "Margherita", preco: 49.90},
    { id: 2, nome: "Calabresa", preco: 36.50},
    { id: 3, nome: "4 Queijos", preco: 50.00},
    { id: 4, nome: "Portuguesa", preco: 45.90},
    { id: 5, nome: "Frango Catupiry", preco: 50.60}
]

class pizzariaServices {
    getAll(){
        return pizzas
    }

    getById(id){
        return pizzas.find(f => f.id === id)
    }


create(nome) {
    const newPizza = {
        id: pizzas.length > 0 ? pizzas[pizzas.length - 1].id + 1 : 1,
        nome,
        preco
    }
    pizzas.push(newPizza)

    return newPizza
  }

updatePatch(id, nome) {
    const index = pizzas.findIndex((f) => f.id === parseInt(id));

    if (index === -1) return null;
    if (nome){
        pizzas[index].nome = nome;
    }
    return pizzas[index];
  }

delete(id) {
    const index = pizzas.findIndex((f) => f.id === parseInt(id));

    if (index === -1) return false;

    return pizzas.splice(index, 1);
    return true;
  }

}

export const pizzariaService = new pizzariaServices()