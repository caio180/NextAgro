import criarSugestao from '../models/model.js';

function criarSugestoes(req, res) {
    criarSugestao.criarSugestoes(req.body, (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                erro: 'Erro ao salvar sugestão'
            });
        }

        res.status(201).json({
            mensagem: 'Sugestão salva com sucesso',
            id: result.insertId
        });

    });
}

export default criarSugestoes;