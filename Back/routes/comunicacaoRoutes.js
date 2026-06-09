const express = require('express');
const router = express.Router();

const comunicacaoController = require('../controllers/comunicacaoController');

router.get('/', comunicacaoController.listar);
router.get('/:id', comunicacaoController.buscarPorId);
router.post('/', comunicacaoController.criar);
router.put('/:id', comunicacaoController.atualizar);
router.delete('/:id', comunicacaoController.excluir);

module.exports = router;