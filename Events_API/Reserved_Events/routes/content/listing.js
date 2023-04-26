const express = require('express');
const router = express.Router();

const listingController = require('../../controllers/content/listingController');

router.get('/', listingController.getAlllistings);
router.post('/', listingController.createlisting);
router.get('/:id', listingController.getlistingById);
router.put('/:id', listingController.updatelisting);
router.delete('/:id', listingController.deletelisting);

module.exports = router;

