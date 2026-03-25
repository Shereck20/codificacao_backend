import express from "express"
import {filmesService} from '../service/filmesService.js'

const route = express.Router()

route.get("/", (req, res) => {
    res.json(filmesService.getAll());
});
route.get("/:id", (req, res) => {
    const filme = filmesService.getBYiD(req.params.id);
    if (filme) { 
        res.json(filme);
    } else {
        res.status(404).json({ error: "Filme não encontrado" });
    }
})

export default route