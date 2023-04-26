const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllorders);
router.post('/', orderController.createorder);
router.get('/:id', orderController.getorderById);
router.put('/:id', orderController.updateorder);
router.delete('/:id', orderController.deleteorder);

module.exports = router;
