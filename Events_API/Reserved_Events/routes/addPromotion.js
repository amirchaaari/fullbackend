const express = require('express');
const router = express.Router();

const addPromotionController = require('../controllers/addPromotionController');

router.get('/', addPromotionController.getAllAddPromotions);
router.post('/', addPromotionController.createAddPromotion);
router.get('/:id', addPromotionController.getAddPromotionById);
router.put('/:id', addPromotionController.updateAddPromotion);
router.delete('/:id', addPromotionController.deleteAddPromotion);

module.exports = router;
