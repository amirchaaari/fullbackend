const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.get('/', accountController.getAllaccounts);
router.post('/', accountController.createaccount);
router.get('/:id', accountController.getaccountById);
router.put('/:id', accountController.updateaccount);
router.delete('/:id', accountController.deleteaccount);

module.exports = router;
