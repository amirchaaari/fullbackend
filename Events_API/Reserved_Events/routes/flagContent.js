const express = require('express');
const router = express.Router();

const flagContentController = require('../controllers/flagContentController');

router.get('/', flagContentController.getAllflagContents);
router.post('/', flagContentController.createflagContent);
router.get('/:id', flagContentController.getflagContentById);
router.put('/:id', flagContentController.updateflagContent);
router.delete('/:id', flagContentController.deleteflagContent);

module.exports = router;
