const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');

router.post('/', imageController.createImage);
router.get('/:id', imageController.getImageById);
router.put('/:id', imageController.updateImage);
router.delete('/:id', imageController.deleteImage);
router.get('/', imageController.getAllImages);

module.exports = router;
