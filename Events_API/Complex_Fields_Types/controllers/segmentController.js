const Segment = require('../models/segement');

// Afficher tous les segments
exports.getSegments = async (req, res) => {
  try {
    const segments = await Segment.find().populate('departure_address arrival_address');
    res.status(200).json(segments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Afficher un segment spécifique
exports.getSegmentById = async (req, res) => {
  try {
    const segment = await Segment.findById(req.params.id).populate('departure_address arrival_address');
    if (!segment) {
      res.status(404).json({ message: "Le segment n'a pas été trouvé" });
    }
    res.status(200).json(segment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ajouter un segment
exports.createSegment = async (req, res) => {
  const segment = new Segment(req.body);
  try {
    const newSegment = await segment.save();
    res.status(201).json(newSegment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour un segment
exports.updateSegment = async (req, res) => {
  try {
    const segment = await Segment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!segment) {
      res.status(404).json({ message: "Le segment n'a pas été trouvé" });
    }
    res.status(200).json(segment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un segment
exports.deleteSegment = async (req, res) => {
  try {
    const segment = await Segment.findByIdAndDelete(req.params.id);
    if (!segment) {
      res.status(404).json({ message: "Le segment n'a pas été trouvé" });
    }
    res.status(200).json({ message: 'Le segment a été supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
