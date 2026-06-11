const Comunicacao = require('../models/comunicacaoModel');

exports.listar = (req, res) => {
    Comunicacao.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
};

exports.listarPorUnidade = (req, res) => {

    const { id } = req.params;

    Comunicacao.listarPorUnidade(
        id,
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json(resultado);
        }
    );
};

exports.buscarPorId = (req, res) => {
    Comunicacao.buscarPorId(req.params.id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
};

exports.criar = (req, res) => {

    const {
        titulo,
        descricao,
        data_hora_envio,
        id_individuo,
        id_unidade_conservacao,
        status
    } = req.body;

    Comunicacao.criar(
        {
            titulo,
            descricao,
            data_hora_envio,
            id_individuo,
            id_unidade_conservacao,
            status
        },
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(201).json({
                mensagem: 'Comunicação cadastrada com sucesso!',
                id: resultado.insertId
            });
        }
    );
};

exports.atualizar = (req, res) => {

    const {
        titulo,
        descricao,
        data_hora_envio,
        id_individuo,
        id_unidade_conservacao,
        status
    } = req.body;

    Comunicacao.atualizar(
        req.params.id,
        {
            titulo,
            descricao,
            data_hora_envio,
            id_individuo,
            id_unidade_conservacao,
            status
        },
        (erro) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Comunicação atualizada com sucesso!'
            });
        }
    );
};

exports.excluir = (req, res) => {
    Comunicacao.excluir(req.params.id, (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json({
            mensagem: 'Comunicação removida com sucesso!'
        });
    });
};