const express = require('express');
const router = express.Router();
const eventTicketBookingController = require('../../controllers/booking/eventTicketController');

// Get all event ticket bookings
router.get('/', eventTicketBookingController.getEventTicketBookings);

// Get a single event ticket booking
router.get('/:id', eventTicketBookingController.getEventTicketBookingById);

// Create a new event ticket booking
router.post('/', eventTicketBookingController.createEventTicketBooking);

// Update an existing event ticket booking
router.put('/:id', eventTicketBookingController.updateEventTicketBooking);

// Delete an event ticket booking
router.delete('/:id', eventTicketBookingController.deleteEventTicketBooking);

module.exports = router;
