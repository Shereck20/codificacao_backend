import express from 'express'
import { EstadiosServices } from '../services/estadiosServices.js';

const route = express.Router();

route.get("/", (req, res) => {
    res.json(EstadiosServices.getAll())
});

export default route