const express = require('express');
const router = express.Router();

const orderFromController = require('../controllers/orderFromController');
router.get('/', orderFromController.getAllorderFrom);

router.get('/:id', orderFromController.getOrderFrom);
router.post('/', orderFromController.createOrderFrom);
router.put('/:id', orderFromController.updateOrderFrom);
router.delete('/:id', orderFromController.deleteOrderFrom);

module.exports = router;
