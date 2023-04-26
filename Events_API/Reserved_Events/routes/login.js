const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.getAlllogins);
router.post('/', loginController.createlogin);
router.get('/:id', loginController.getloginById);
router.put('/:id', loginController.updatelogin);
router.delete('/:id', loginController.deletelogin);

module.exports = router;
