const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/paymentMethodController');

// Create a new payment method
router.post('/', paymentMethodController.createPaymentMethod);

// Get all payment methods
router.get('/', paymentMethodController.getAllPaymentMethods);

// Get a single payment method by ID
router.get('/:id', paymentMethodController.getPaymentMethodById);

// Update a payment method by ID
router.put('/:id', paymentMethodController.updatePaymentMethodById);

// Delete a payment method by ID
router.delete('/:id', paymentMethodController.deletePaymentMethodById);

module.exports = router;
