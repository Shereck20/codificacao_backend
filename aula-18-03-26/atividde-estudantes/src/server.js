import express from 'express';
import route from './routes/estudantesRoutes.js';

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/estudantes", route);

app.listen(PORT, () => {
  console.log(`a aplicação está rodando em http://localhost:${PORT}`);
});