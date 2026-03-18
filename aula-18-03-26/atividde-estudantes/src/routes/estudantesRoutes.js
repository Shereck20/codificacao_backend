import express from 'express'
import { estudantesServices } from '../services/estudantesServices.js';

const route = express.Router();

route.get("/", (req, res) => {
  res.json(estudantesServices.getAll());
});

export default route