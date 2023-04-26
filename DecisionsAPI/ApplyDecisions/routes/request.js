const express = require('express');
const router = express.Router();

const requestDecision = require('../controllers/requestController');

router.get('/', requestDecision.getAllrequestDecisions);
router.post('/', requestDecision.createreqsuestDecision);
router.get('/:id', requestDecision.getrequestDecisionById);
router.put('/:id', requestDecision.updaterequestDecision);
router.delete('/:id', requestDecision.deleterequestDecision);

module.exports = router;
