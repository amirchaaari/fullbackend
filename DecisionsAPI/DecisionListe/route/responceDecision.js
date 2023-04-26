const express = require('express');
const router = express.Router();

const responceDecision = require('../controllers/responceDecision');

router.get('/', responceDecision.getAllresponceDecisions);
router.post('/', responceDecision.createreqsuestDecision);
router.get('/:id', responceDecision.getresponceDecisionById);
router.put('/:id', responceDecision.updateresponceDecision);
router.delete('/:id', responceDecision.deleteresponceDecision);

module.exports = router;
