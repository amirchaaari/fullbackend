const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');

// GET all discounts
router.get('/', discountController.getAllDiscounts);

// POST create a new discount
router.post('/', discountController.createDiscount);

// GET a discount by ID
router.get('/:id', discountController.getDiscountById);

// PUT update a discount by ID
router.put('/:id', discountController.updateDiscountById);

// DELETE delete a discount by ID
router.delete('/:id', discountController.deleteDiscountById);

module.exports = router;
