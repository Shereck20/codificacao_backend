import express from 'express'

const app = express()
app.use(express.json())
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`a aplicação está rodando em http://localhost:${PORT}`);
});