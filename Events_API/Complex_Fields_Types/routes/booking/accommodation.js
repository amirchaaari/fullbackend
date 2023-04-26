const express = require('express');
const router = express.Router();
const bookingAccommodationController = require('../../controllers/booking/accommodationController');

// CREATE - Créer un nouveau logement réservé
router.post('/', bookingAccommodationController.createBookingAccommodation);

// READ - Récupérer tous les logements réservés
router.get('/', bookingAccommodationController.getAllBookingAccommodations);

// READ - Récupérer un logement réservé par ID
router.get('/:id', bookingAccommodationController.getBookingAccommodationById);

// UPDATE - Mettre à jour un logement réservé existant
router.put('/:id', bookingAccommodationController.updateBookingAccommodation);

// DELETE - Supprimer un logement réservé existant
router.delete('/:id', bookingAccommodationController.deleteBookingAccommodation);

module.exports = router;
