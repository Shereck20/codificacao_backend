import express from "express";
import fruitsRoutes from "./routes/fruitsRoutes.js";

const app = express();
const port = 3000;

app.use(fruitsRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});