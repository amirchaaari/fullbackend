const express = require('express');
const router = express.Router();

const labelController = require('../controller/label');

router.get('/', labelController.getAlllabels);
router.post('/', labelController.createlabel);
router.get('/:id', labelController.getlabelById);
router.put('/:id', labelController.updatelabel);
router.delete('/:id', labelController.deletelabel);

module.exports = router;
