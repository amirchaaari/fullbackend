const express = require('express');
const router = express.Router();

const responce = require('../controllers/responce');

router.get('/', responce.getAllresponces);
router.post('/', responce.createreqsuestDecision);
router.get('/:id', responce.getresponceById);
router.put('/:id', responce.updateresponce);
router.delete('/:id', responce.deleteresponce);

module.exports = router;
