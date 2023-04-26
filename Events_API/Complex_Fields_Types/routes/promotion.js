const express = require('express');
const router = express.Router();

const promotionController = require('../controllers/promotionController');

// Afficher toutes les promotions
router.get('/', promotionController.getPromotions);

// Afficher une promotion spécifique
router.get('/:id', promotionController.getPromotionById);

// Ajouter une promotion
router.post('/', promotionController.createPromotion);

// Mettre à jour une promotion
router.put('/:id', promotionController.updatePromotion);

// Supprimer une promotion
router.delete('/:id', promotionController.deletePromotion);

module.exports = router;
