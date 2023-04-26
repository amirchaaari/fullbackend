const express = require('express');
const router = express.Router();
const flightBookingController = require('../../controllers/booking/flightController');

// Créer une nouvelle réservation de vol
router.post('/', flightBookingController.createFlightBooking);

// Récupérer toutes les réservations de vol
router.get('/', flightBookingController.getAllFlightBookings);

// Récupérer une réservation de vol par son ID
router.get('/:id', flightBookingController.getFlightBookingById);

// Mettre à jour une réservation de vol par son ID
router.put('/:id', flightBookingController.updateFlightBooking);

// Supprimer une réservation de vol par son ID
router.delete('/:id', flightBookingController.deleteFlightBooking);

module.exports = router;
