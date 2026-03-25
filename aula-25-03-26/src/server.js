import express from 'express';
import filmesRoutes from './routes/filmesRoutes.js';

const app = express();
app.use(express.json());
app.use('/filmes', filmesRoutes);
const port = 3000;

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`)
})