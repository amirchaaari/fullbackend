const express = require('express');
const router = express.Router();

const segmentController = require('../controllers/segmentController');

// Afficher tous les segments
router.get('/', segmentController.getSegments);

// Afficher un segment spécifique
router.get('/:id', segmentController.getSegmentById);

// Ajouter un segment
router.post('/', segmentController.createSegment);

// Mettre à jour un segment
router.put('/:id', segmentController.updateSegment);

// Supprimer un segment
router.delete('/:id', segmentController.deleteSegment);

module.exports = router;
