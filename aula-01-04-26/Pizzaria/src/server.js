import express from 'express'
import pizzariaRoutes from './routes/pizzariaRoutes.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/pizzaria', pizzariaRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
