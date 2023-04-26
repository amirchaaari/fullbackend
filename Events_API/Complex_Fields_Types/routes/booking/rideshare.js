const express = require('express');
const router = express.Router();
const rideshareController = require('../../controllers/booking/rideshareController');

// POST - Créer un nouveau trajet partagé
router.post('/', rideshareController.createRideshare);

// GET - Récupérer tous les trajets partagés
router.get('/', rideshareController.getAllRideshares);

// GET - Récupérer un trajet partagé par ID
router.get('/:id', rideshareController.getRideshareById);

// PUT - Mettre à jour un trajet partagé existant
router.put('/:id', rideshareController.updateRideshare);

// DELETE - Supprimer un trajet partagé existant
router.delete('/:id', rideshareController.deleteRideshare);

module.exports = router;
