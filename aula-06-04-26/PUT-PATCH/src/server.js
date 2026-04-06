import express from 'express'
import PProutes from './routes/PProutes.js'

const app = express();
app.use(express.json())
app.use('/pp', PProutes)

const port = 3000

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})