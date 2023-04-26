const FlightBooking = require('../../models/booking/flight');

// Créer une nouvelle réservation de vol
exports.createFlightBooking = async (req, res) => {
  try {
    const flightBooking = new FlightBooking(req.body);
    await flightBooking.save();
    res.status(201).json(flightBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Récupérer toutes les réservations de vol
exports.getAllFlightBookings = async (req, res) => {
  try {
    const flightBookings = await FlightBooking.find().populate('segments').populate('guests');
    res.json(flightBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer une réservation de vol par son ID
exports.getFlightBookingById = async (req, res) => {
  try {
    const flightBooking = await FlightBooking.findById(req.params.id).populate('segments').populate('guests');
    if (!flightBooking) {
      return res.status(404).json({ message: 'Réservation de vol introuvable' });
    }
    res.json(flightBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour une réservation de vol par son ID
exports.updateFlightBooking = async (req, res) => {
  try {
    const flightBooking = await FlightBooking.findById(req.params.id);
    if (!flightBooking) {
      return res.status(404).json({ message: 'Réservation de vol introuvable' });
    }
    Object.assign(flightBooking, req.body);
    await flightBooking.save();
    res.json(flightBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une réservation de vol par son ID
exports.deleteFlightBooking = async (req, res) => {
  try {
    const flightBooking = await FlightBooking.findById(req.params.id);
    if (!flightBooking) {
      return res.status(404).json({ message: 'Réservation de vol introuvable' });
    }
    await flightBooking.remove();
    res.json({ message: 'Réservation de vol supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
