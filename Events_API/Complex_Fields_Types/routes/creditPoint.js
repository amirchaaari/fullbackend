const express = require('express');
const router = express.Router();
const creditPointController = require('../controllers/creditPointController');

router.get('/', creditPointController.getAllCreditPoints);
router.get('/:id', creditPointController.getCreditPointById);
router.post('/', creditPointController.createCreditPoint);
router.put('/:id', creditPointController.updateCreditPointById);
router.delete('/:id', creditPointController.deleteCreditPointById);

module.exports = router;
