const express = require('express');
const router = express.Router();

const individuoController = require('../controllers/individuoController');

router.get('/', individuoController.listar);
router.get('/:id', individuoController.buscarPorId);
router.post('/', individuoController.criar);
router.put('/:id', individuoController.atualizar);
router.delete('/:id', individuoController.excluir);

module.exports = router;