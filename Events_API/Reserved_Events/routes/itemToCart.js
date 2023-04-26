const express = require('express');
const router = express.Router();

const itemToCartController = require('../controllers/itemToCartController');

router.get('/', itemToCartController.getAllitemToCarts);
router.post('/', itemToCartController.createitemToCart);
router.get('/:id', itemToCartController.getitemToCartById);
router.put('/:id', itemToCartController.updateitemToCart);
router.delete('/:id', itemToCartController.deleteitemToCart);

module.exports = router;
