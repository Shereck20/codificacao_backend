const pacientes = [
    { id: 1, nome: "João Pedro", doenca: "gripe"},
    { id: 2, nome: "André Lucas", doenca: "variola dos macacos"},
    { id: 3, nome: "Lucas Marinho", doenca: "trombose"},
    { id: 4, nome: "Ana Julia", doenca: "leocemia"},
    { id: 5, nome: "Caetano", doenca: "câncer"}
]

class pacientesServices {
    getAll(){
        return pacientes
    }

    getById(id){
        return pacientes.find(f => f.id === id)
    }


create(nome) {
    const newPaciente = {
        id: pacientes.length > 0 ? pacientes[pacientes.length - 1].id + 1 : 1,
        nome,
        doenca
    }
    pacientes.push(newPaciente)

    return newPaciente
  }

updatePatch(id, nome) {
    const index = pacientes.findIndex((f) => f.id === parseInt(id));

    if (index === -1) return null;
    if (nome){
        pacientes[index].nome = nome;
    }
    return pacientes[index];
  }

delete(id) {
    const index = pacientes.findIndex((f) => f.id === parseInt(id));

    if (index === -1) return false;

    return pacientes.splice(index, 1);
    return true;
  }

}

export const pacientesService = new pacientesServices()
