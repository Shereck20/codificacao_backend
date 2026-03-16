const express = require("express");
const app = express();

const frutas = [
  { id: 1, nome: "Maçã"},
  { id: 2, nome: "Banana"},
  { id: 3, nome: "Uva"},
  { id: 4, nome: "Laranja"}
];

function pegarFrutaPorId(id) {
  return frutas.find(fruta => fruta.id === Number(id));
}

app.get("/frutas/:id", (req, res) => {
  const fruta = pegarFrutaPorId(req.params.id);
  res.json(fruta);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});