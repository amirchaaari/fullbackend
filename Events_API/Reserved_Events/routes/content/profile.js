const express = require('express');
const router = express.Router();

const profilController = require('../../controllers/content/profileController');

router.get('/', profilController.getAllprofils);
router.post('/', profilController.createprofil);
router.get('/:id', profilController.getprofilById);
router.put('/:id', profilController.updateprofil);
router.delete('/:id', profilController.deleteprofil);

module.exports = router;
