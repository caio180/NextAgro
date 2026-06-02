import 'dotenv/config';
import express from 'express';
import cors from 'cors'
const app = express()
const porta = process.env.PORT
app.use(cors())
app.use(express.json())

const sugestoes = []

app.get('/', (req, res) => {
    res.send("Teste")
})
app.post('/formSugestao', (req, res) =>{
    sugestoes.push(req.body)
    res.json(sugestoes)
})
app.get('/forSugestao', (req, res) =>{
    res.json(sugestoes)
})

app.listen(porta, ()=> console.log(`Servidor rodando: http://localhost:${porta}`))