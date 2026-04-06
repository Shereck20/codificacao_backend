import express from 'express'
import PPservice from '../services/PPservice.js'

const router = express.Router()

router.get('/', (req, res) =>{
    const PP = PPservice.getall()
    res.json(PP) 
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const pp = PPservice.getById(id)
    if (!pp) {
        return res.status(404).json({ message: "PP não encontrado" })
    }
    res.json(pp)
})

router.post('/', (req, res) =>{
    const {nome} = req.body
    if(nome){
        const newPP = PPservice.create(nome)
        res.json(newPP)
    }
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    const pp = PPservice.update(id, nome)
    if (!pp) {
        return res.status(404).json({ message: "Fruta não encontrada" })
    }
    res.json(pp)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    if (!nome) {
        return res.status(400).json({ message: "dados insuficientes para alteração" })
    }
    const pp = PPservice.update(id, {nome})
    if (!pp) {
        return res.status(404).json({ message: "Fruta não encontrada" })
    }
    res.json(pp)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    const deleted = PPservice.delete(id)
    if (!deleted){
        return res.status(404).json({ menssage: "Fruta não encontrada para exclusão"})
    }
})

export default router