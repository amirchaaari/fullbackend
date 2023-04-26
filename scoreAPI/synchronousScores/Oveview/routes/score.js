const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/score');

router.get('/', scoreController.getAllscores);
router.post('/', scoreController.createscore);
router.get('/:id', scoreController.getscoreById);
router.put('/:id', scoreController.updatescore);
router.delete('/:id', scoreController.deletescore);

module.exports = router;
