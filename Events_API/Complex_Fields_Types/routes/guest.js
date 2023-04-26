const express = require('express');
const router = express.Router();

const guestController = require('../controllers/guestController');

router.get('/', guestController.getAllGuests);
router.post('/', guestController.createGuest);
router.get('/:id', guestController.getGuestById);
router.put('/:id', guestController.updateGuestById);
router.delete('/:id', guestController.deleteGuestById);

module.exports = router;
