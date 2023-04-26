const Other = require('../../models/booking/other');

// Créer une nouvelle réservation pour une autre activité
exports.createOther = async (req, res) => {
  try {
    const newOther = await Other.create(req.body);
    res.status(201).json(newOther);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de la réservation pour cette autre activité.' });
  }
};

// Récupérer toutes les réservations pour les autres activités
exports.getAllOthers = async (req, res) => {
  try {
    const others = await Other.find().populate('segments').populate('guests').populate('location');
    res.status(200).json(others);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des réservations pour les autres activités.' });
  }
};

// Récupérer une réservation pour une autre activité par son ID
exports.getOtherById = async (req, res) => {
  try {
    const other = await Other.findById(req.params.id).populate('segments').populate('guests').populate('location');
    if (other) {
      res.status(200).json(other);
    } else {
      res.status(404).json({ message: 'La réservation pour cette autre activité n\'a pas été trouvée.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la réservation pour cette autre activité.' });
  }
};

// Mettre à jour une réservation pour une autre activité par son ID
exports.updateOther = async (req, res) => {
  try {
    const updatedOther = await Other.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedOther) {
      res.status(200).json(updatedOther);
    } else {
      res.status(404).json({ message: 'La réservation pour cette autre activité n\'a pas été trouvée.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de la réservation pour cette autre activité.' });
  }
};

// Supprimer une réservation pour une autre activité par son ID
exports.deleteOther = async (req, res) => {
  try {
    const deletedOther = await Other.findByIdAndDelete(req.params.id);
    if (deletedOther) {
      res.status(200).json({ message: 'La réservation pour cette autre activité a été supprimée avec succès.' });
    } else {
      res.status(404).json({ message: 'La réservation pour cette autre activité n\'a pas été trouvée.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la réservation pour cette autre activité.' });
  }
};
