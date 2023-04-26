const express = require('express');
const router = express.Router();
const digitalOrderController = require('../controllers/digitalOrderController');

// Create a new digital order
router.post('/', digitalOrderController.createDigitalOrder);

// Get all digital orders
router.get('/', digitalOrderController.getAllDigitalOrders);

// Get a specific digital order by ID
router.get('/:id', digitalOrderController.getDigitalOrderById);

// Update a specific digital order by ID
router.put('/:id', digitalOrderController.updateDigitalOrderById);

// Delete a specific digital order by ID
router.delete('/:id', digitalOrderController.deleteDigitalOrderById);

module.exports = router;
