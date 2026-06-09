const db = require('../config/db');

exports.listar = (retorno) => {
    db.query('SELECT * FROM comunicacao', retorno);
};

exports.buscarPorId = (id, retorno) => {
    db.query(
        'SELECT * FROM comunicacao WHERE id = ?',
        [id],
        retorno
    );
};

exports.criar = (dados, retorno) => {
    db.query(
        `INSERT INTO comunicacao
        (titulo, descricao, data_hora_envio, id_individuo, id_unidade_conservacao, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            dados.titulo,
            dados.descricao,
            dados.data_hora_envio,
            dados.id_individuo,
            dados.id_unidade_conservacao,
            dados.status
        ],
        retorno
    );
};

exports.atualizar = (id, dados, retorno

) => {
    db.query(
        `UPDATE comunicacao
        SET titulo = ?, descricao = ?, data_hora_envio = ?,
            id_individuo = ?, id_unidade_conservacao = ?, status = ?
        WHERE id = ?`,
        [
            dados.titulo,
            dados.descricao,
            dados.data_hora_envio,
            dados.id_individuo,
            dados.id_unidade_conservacao,
            dados.status,
            id
        ],
        retorno
    );
};

exports.excluir = (id, retorno) => {
    db.query(
        'DELETE FROM comunicacao WHERE id = ?',
        [id],
        retorno
    );
};