import express from "express";

import fruitsServices from "../services/fruitsServices.js";

const router = express.Router();

fruitsRoutes.get("/", (req, res) => {
    res.json(fruitsServices.getall());
});

fruitsRoutes.get("/:id", (req, res) => {
    const fruit = fruitsServices.getById(req.params.id);
    if (fruit) { 
        res.json(fruit);
    } else {
        res.status(404).json
    }
})

export default fruitsRoute