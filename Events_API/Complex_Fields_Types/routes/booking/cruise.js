const express = require('express');
const router = express.Router();
const cruiseController = require('../../controllers/booking/cruiseController');

// Route pour créer une nouvelle croisière
router.post('/', cruiseController.createCruise);

// Route pour récupérer toutes les croisières
router.get('/', cruiseController.getAllCruises);

// Route pour récupérer une croisière par ID
router.get('/:id', cruiseController.getCruiseById);

// Route pour mettre à jour une croisière
router.put('/:id', cruiseController.updateCruise);

// Route pour supprimer une croisière
router.delete('/:id', cruiseController.deleteCruise);

module.exports = router;



