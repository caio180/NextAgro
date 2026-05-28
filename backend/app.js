import 'dotenv/config';
import express from 'express';
import cors from 'cors'
const app = express()
const porta = process.env.PORT
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Teste")
})
app.listen(porta, ()=> console.log(`Servidor rodando: http://localhost:${porta}`))