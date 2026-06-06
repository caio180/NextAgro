import connection from '../database/connection.js';

function criarSugestao(dados, callback) {

    const sql = `
        INSERT INTO sugestoes
        (nome, email, melhoria, assuntos, avaliacao)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            dados.nome,
            dados.email,
            dados.Sugestao_melhoria,
            dados.Sugestao_assuntos,
            dados.avaliacao
        ],
        callback
    );
}

export default criarSugestao