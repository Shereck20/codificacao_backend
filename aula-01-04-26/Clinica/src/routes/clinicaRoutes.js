import express from 'express'
import { pacientesService } from '../services/clinicaServices.js'

const route = express.Router()

route.get('/', (req, res) => {
    const pacientes = pacientesService.getAll()
    res.json(data)
})

route.post('/', (req, res) => {
    const { nome } = req.body

    if (!nome) {
        return res.status(404).json({ error: 'Informar nome é obrigatório' })
    }

    const newPaciente = pacientesService.create(nome)
    res.json(newPaciente)
})

route.get('/:id', (req, res) => {
    const { id } = req.params
    const paciente = pacientesService.getById(id)
    if (!paciente) {
        return res.status(404).json({ error: 'Paciente não encontrado' })
    }
    res.json(paciente)
})

route.patch('/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    if (!nome) {
        return res.status(404).json({ error: 'Paciente não encontrado para a substituição' })
    }
})

route.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleted = pacientesService.delete(id)
    if (!deleted) {
        return res.status(404).json({ error: 'Paciente não encontrado para a exclusão' })
    }
    res.status(204).send()
})

export default route