const Individuo = require('../models/individuoModel');

exports.listar = (req, res) => {
    Individuo.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
};

exports.buscarPorId = (req, res) => {
    Individuo.buscarPorId(req.params.id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);
    });
};

exports.criar = (req, res) => {

    const { nome, email, telefone } = req.body;

    Individuo.criar(
        { nome, email, telefone },
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(201).json({
                mensagem: 'Individuo cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );
};

exports.atualizar = (req, res) => {

    const { nome, email, telefone } = req.body;

    Individuo.atualizar(
        req.params.id,
        { nome, email, telefone },
        (erro) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Indivíduo atualizado com sucesso!'
            });
        }
    );
};

exports.excluir = (req, res) => {

    Individuo.excluir(req.params.id, (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }

        res.json({
            mensagem: 'Individuo removido com sucesso!'
        });
    });
};