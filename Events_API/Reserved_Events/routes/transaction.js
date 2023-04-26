const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionControlleur');

router.get('/', transactionController.getAlltransactions);
router.post('/', transactionController.createtransaction);
router.get('/:id', transactionController.gettransactionById);
router.put('/:id', transactionController.updatetransaction);
router.delete('/:id', transactionController.deletetransaction);

module.exports = router;
