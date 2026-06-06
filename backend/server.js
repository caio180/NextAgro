import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rotas from './routes/rotas.js';
const app = express();
const porta = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/formSugestao', rotas);

app.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`));