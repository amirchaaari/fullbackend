const express = require('express');
const router = express.Router();
const browserController = require('../controllers/browserController');

router.get('/', browserController.getAllBrowserss);

router.post('/', browserController.createBrowser);
router.get('/:id', browserController.getBrowserById);
router.put('/:id', browserController.updateBrowserById);
router.delete('/:id', browserController.deleteBrowserById);

module.exports = router;