const express = require('express')
const app = express()
const port = 3000
let frutas = [
   { id: 1, nome: 'banana' },
   { id: 2, nome: 'maçã' },
   { id: 3, nome: 'laranja'} ]
let objetos = [
   { id: 1, nome: 'massa corrida' },
   { id: 2, nome: 'tijolo' },
   { id: 3, nome: 'bitoneira'} ]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

   
app.get('/objetos/getAll', (req, res) => {
  res.json({
    sucess: true,
    data: objetos
  })
})


app.get('/frutas/getAll', (req, res) => {
  res.json({
    sucess: true,
    data: frutas
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})