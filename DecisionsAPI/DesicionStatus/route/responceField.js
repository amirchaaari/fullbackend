const express = require('express');
const router = express.Router();

const responceField = require('../controllers/responceField');

router.get('/', responceField.getAllresponceFields);
router.post('/', responceField.createreqsuestDecision);
router.get('/:id', responceField.getresponceFieldById);
router.put('/:id', responceField.updateresponceField);
router.delete('/:id', responceField.deleteresponceField);

module.exports = router;
