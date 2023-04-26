const express = require('express');
const router = express.Router();

const linkSessionToUserController = require('../controllers/linkSessionToUserController');

router.get('/', linkSessionToUserController.getAlllinkSessionToUserControllers);
router.post('/', linkSessionToUserController.createlinkSessionToUserController);
router.get('/:id', linkSessionToUserController.getlinkSessionToUserControllerById);
router.put('/:id', linkSessionToUserController.updatelinkSessionToUserController);
router.delete('/:id', linkSessionToUserController.deletelinkSessionToUserController);

module.exports = router;
