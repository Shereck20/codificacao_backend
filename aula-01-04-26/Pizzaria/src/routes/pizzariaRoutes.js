import express from 'express'
import { pizzariaService } from '../services/pizzariaServices.js'

const route = express.Router()

route.get('/', (req, res) => {
    const pizzas = pizzariaService.getAll()
    res.json(data)
})

route.post('/', (req, res) => {
    const { nome } = req.body

    if (!nome) {
        return res.status(404).json({ error: 'Informar nome é obrigatório' })
    }

    const newPizza = pizzariaService.create(nome)
    res.json(newPizza)
})

route.get('/:id', (req, res) => {
    const { id } = req.params
    const pizza = pizzariaService.getById(id)
    if (!pizza) {
        return res.status(404).json({ error: 'Pizza não encontrado' })
    }
    res.json(pizza)
})

route.patch('/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    if (!nome) {
        return res.status(404).json({ error: 'Pizza não encontrada para a substituição' })
    }
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleted = pizzariaService.delete(id)
    if (!deleted) {
        return res.status(404).json({ error: 'Pizza não encontrada para a exclusão' })
    }
    res.status(204).send()
})

export default route