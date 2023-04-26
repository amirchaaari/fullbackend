const Rideshare = require('../../models/booking/rideshare');

// CREATE - Créer un nouveau trajet partagé
exports.createRideshare = async (req, res) => {
  try {
    const rideshare = new Rideshare({
      title: req.body.title,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      price: req.body.price,
      currency_code: req.body.currency_code,
      quantity: req.body.quantity,
      guests: req.body.guests,
      segments: req.body.segments,
      tags: req.body.tags
    });
    const savedRideshare = await rideshare.save();
    res.status(201).json(savedRideshare);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// READ - Récupérer tous les trajets partagés
exports.getAllRideshares = async (req, res) => {
  try {
    const rideshares = await Rideshare.find().populate('guests').populate('segments');
    res.json(rideshares);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// READ - Récupérer un trajet partagé par ID
exports.getRideshareById = async (req, res) => {
  try {
    const rideshare = await Rideshare.findById(req.params.id).populate('guests').populate('segments');
    if (!rideshare) {
      return res.status(404).json({ message: 'Rideshare not found' });
    }
    res.json(rideshare);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// UPDATE - Mettre à jour un trajet partagé existant
exports.updateRideshare = async (req, res) => {
  try {
    const rideshare = await Rideshare.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rideshare) {
      return res.status(404).json({ message: 'Rideshare not found' });
    }
    res.json(rideshare);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// DELETE - Supprimer un trajet partagé existant
exports.deleteRideshare = async (req, res) => {
  try {
    const rideshare = await Rideshare.findByIdAndDelete(req.params.id);
    if (!rideshare) {
      return res.status(404).json({ message: 'Rideshare not found' });
    }
    res.json({ message: 'Rideshare deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
