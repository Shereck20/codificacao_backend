 const fruits = [
  { id: 1, name: "Maçã"},
  { id: 2, name: "Banana"},
  { id: 3, name: "Laranja"},
]

class fruitsServices {
  getall() {
   return fruits;
  }
  getById(id) {
    return fruits.find((fruit) => fruit.id === parseInt(id));
  }
}

export const fruitsServices = new fruitsServices();