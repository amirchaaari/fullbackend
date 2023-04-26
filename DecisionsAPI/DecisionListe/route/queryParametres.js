const express = require('express');
const router = express.Router();

const queryParametres = require('../controllers/queryParametres');

router.get('/', queryParametres.getAllqueryParametress);
router.post('/', queryParametres.createreqsuestDecision);
router.get('/:id', queryParametres.getqueryParametresById);
router.put('/:id', queryParametres.updatequeryParametres);
router.delete('/:id', queryParametres.deletequeryParametres);

module.exports = router;
