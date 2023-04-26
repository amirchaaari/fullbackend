const express = require('express');
const router = express.Router();

const reviewController = require('../../controllers/content/reviewContoller');

router.get('/', reviewController.getAllreviews);
router.post('/', reviewController.createreview);
router.get('/:id', reviewController.getreviewById);
router.put('/:id', reviewController.updatereview);
router.delete('/:id', reviewController.deletereview);

module.exports = router;
