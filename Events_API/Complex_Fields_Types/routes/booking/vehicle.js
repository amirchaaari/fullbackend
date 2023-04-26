const express = require('express');
const router = express.Router();
const vehicleController = require('../../controllers/booking/vehicleController');

// Créer une nouvelle réservation de véhicule
router.post('/', vehicleController.createVehicle);

// Récupérer toutes les réservations de véhicule
router.get('/', vehicleController.getAllVehicles);

// Récupérer une réservation de véhicule par son ID
router.get('/:id', vehicleController.getVehicleById);

// Mettre à jour une réservation de véhicule par son ID
router.put('/:id', vehicleController.updateVehicle);

// Supprimer une réservation de véhicule par son ID
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
