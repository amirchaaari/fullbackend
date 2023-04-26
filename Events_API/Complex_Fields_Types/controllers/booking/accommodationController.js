const bookingAccommodation = require('../../models/booking/accommodation');

// CREATE - Créer un nouveau logement réservé
exports.createBookingAccommodation = async (req, res) => {
  try {
    const newBookingAccommodation = new bookingAccommodation(req.body);
    const savedBookingAccommodation = await newBookingAccommodation.save();
    res.status(201).json(savedBookingAccommodation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ - Récupérer tous les logements réservés
exports.getAllBookingAccommodations = async (req, res) => {
  try {
    const bookingAccommodations = await bookingAccommodation.find().populate('guests').populate('location');
    res.json(bookingAccommodations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ - Récupérer un logement réservé par ID
exports.getBookingAccommodationById = async (req, res) => {
  try {
    const bookingAccommodation = await bookingAccommodation.findById(req.params.id).populate('guests').populate('location');
    if (bookingAccommodation) {
      res.json(bookingAccommodation);
    } else {
      res.status(404).json({ message: 'Logement réservé non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE - Mettre à jour un logement réservé existant
exports.updateBookingAccommodation = async (req, res) => {
  try {
    const updatedBookingAccommodation = await bookingAccommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedBookingAccommodation) {
      res.json(updatedBookingAccommodation);
    } else {
      res.status(404).json({ message: 'Logement réservé non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE - Supprimer un logement réservé existant
exports.deleteBookingAccommodation = async (req, res) => {
  try {
    const deletedBookingAccommodation = await bookingAccommodation.findByIdAndDelete(req.params.id);
    if (deletedBookingAccommodation) {
      res.json(deletedBookingAccommodation);
    } else {
      res.status(404).json({ message: 'Logement réservé non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
