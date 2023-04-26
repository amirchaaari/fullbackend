const express = require('express');
const router = express.Router();
const OtherController = require('../../controllers/booking/otherController');

// Créer une nouvelle réservation de vol
router.post('/', OtherController.createOther);

// Récupérer toutes les réservations de vol
router.get('/', OtherController.getAllOthers);

// Récupérer une réservation de vol par son ID
router.get('/:id', OtherController.getOtherById);

// Mettre à jour une réservation de vol par son ID
router.put('/:id', OtherController.updateOther);

// Supprimer une réservation de vol par son ID
router.delete('/:id', OtherController.deleteOther);

module.exports = router;
