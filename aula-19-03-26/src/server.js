import express from 'express'
import estadiosRoutes from './routes/estadiosRoutes.js'

const app = express()
app.use(express.json())
app.use('/estadios', estadiosRoutes)
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`a aplicação está rodando em http://localhost:${PORT}`);
});