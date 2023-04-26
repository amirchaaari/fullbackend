const express = require('express');
const router = express.Router();

const logoutController = require('../controllers/logoutController');

router.get('/', logoutController.getAlllogouts);
router.post('/', logoutController.createlogout);
router.get('/:id', logoutController.getlogoutById);
router.put('/:id', logoutController.updatelogout);
router.delete('/:id', logoutController.deletelogout);

module.exports = router;
