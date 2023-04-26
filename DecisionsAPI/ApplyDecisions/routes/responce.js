const express = require('express');
const router = express.Router();

const responceDecision = require('../controllers/responceController');

router.get('/', responceDecision.getAllresponceDecisions);
router.post('/', responceDecision.createresponceDecision);
router.get('/:id', responceDecision.getresponceDecisionById);
router.put('/:id', responceDecision.updateresponceDecision);
router.delete('/:id', responceDecision.deleteresponceDecision);

module.exports = router;
