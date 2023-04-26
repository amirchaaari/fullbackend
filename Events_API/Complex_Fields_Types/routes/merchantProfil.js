const express = require('express');
const router = express.Router();
const merchantProfileController = require('../controllers/merchantProfilController');

// Get all merchant profiles
router.get('/', merchantProfileController.getAllMerchantProfiles);

// Create new merchant profile
router.post('/', merchantProfileController.createMerchantProfile);

// Get merchant profile by id
router.get('/:id', merchantProfileController.getMerchantProfileById);

// Update merchant profile by id
router.put('/:id', merchantProfileController.updateMerchantProfileById);

// Delete merchant profile by id
router.delete('/:id', merchantProfileController.deleteMerchantProfileById);

module.exports = router;
