import express from 'express'
import sushibarRoutes from './routes/sushibarRoutes.js'


const app = express()
const PORT = 3000

app.use(express.json())

app.use('/sushis', sushibarRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
