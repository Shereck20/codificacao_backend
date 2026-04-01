import express from 'express'
import { sushibarService } from '../services/sushibarService.js'

const route = express.Router()

route.get('/', (req, res) => {
    const sushis = sushibarService.getAll()
    res.json(data)
})

route.post('/', (req, res) => {
    const { nome } = req.body

    if (!nome) {
        return res.status(404).json({ error: 'Informar nome é obrigatório' })
    }

    const newSushi = sushibarService.create(nome)
    res.json(newSushi)
})

route.get('/:id', (req, res) => {
    const { id } = req.params
    const sushi = sushibarService.getById(id)
    if (!sushi) {
        return res.status(404).json({ error: 'Sushi não encontrado' })
    }
    res.json(sushi)
})

route.patch('/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    if (!nome) {
        return res.status(404).json({ error: 'Sushi não encontrado para a substituição' })
    }
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleted = sushibarService.delete(id)
    if (!deleted) {
        return res.status(404).json({ error: 'Sushi não encontrado para a exclusão' })
    }
    res.status(204).send()
})

export default route