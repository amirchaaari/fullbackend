const express = require('express');
const router = express.Router();
const busBookingController = require('../../controllers/booking/busController');

// Route pour créer une nouvelle réservation
router.post('/', busBookingController.createBooking);

// Route pour récupérer toutes les réservations
router.get('/', busBookingController.getAllBookings);

// Route pour récupérer une réservation par ID
router.get('/:id', busBookingController.getBookingById);

// Route pour mettre à jour une réservation
router.put('/:id', busBookingController.updateBooking);

// Route pour supprimer une réservation
router.delete('/:id', busBookingController.deleteBooking);

module.exports = router;