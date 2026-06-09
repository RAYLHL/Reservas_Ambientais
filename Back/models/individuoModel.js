const db = require('../config/db');

exports.listar = (retorno) => {
    db.query('SELECT * FROM individuo', retorno);
};

exports.buscarPorId = (id, retorno) => {
    db.query(
        'SELECT * FROM individuo WHERE id = ?',
        [id],
        retorno
    );
};

exports.criar = (dados, retorno) => {
    db.query(
        'INSERT INTO individuo (nome, email, telefone) VALUES (?, ?, ?)',
        [dados.nome, dados.email, dados.telefone],
        retorno
    );
};

exports.atualizar = (id, dados, retorno) => {
    db.query(
        'UPDATE individuo SET nome = ?, email = ?, telefone = ? WHERE id = ?',
        [dados.nome, dados.email, dados.telefone, id],
        retorno
    );
};

exports.excluir = (id, retorno) => {
    db.query(
        'DELETE FROM individuo WHERE id = ?',
        [id],
        retorno
    );
};