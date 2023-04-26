const BusBooking = require('../../models/booking/bus');

// Méthode pour créer une nouvelle réservation
exports.createBooking = async (req, res) => {
    try {
        const newBooking = new BusBooking(req.body);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la création de la réservation.' });
    }
};

// Méthode pour récupérer toutes les réservations
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await BusBooking.find().populate('guests').populate('segments');
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération des réservations.' });
    }
};

// Méthode pour récupérer une réservation par ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await BusBooking.findById(req.params.id).populate('guests').populate('segments');
        if (!booking) {
            return res.status(404).json({ error: 'Réservation non trouvée.' });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération de la réservation.' });
    }
};

// Méthode pour mettre à jour une réservation
exports.updateBooking = async (req, res) => {
    try {
        const booking = await BusBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            return res.status(404).json({ error: 'Réservation non trouvée.' });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour de la réservation.' });
    }
};

// Méthode pour supprimer une réservation
exports.deleteBooking = async (req, res) => {
    try {
        const booking = await BusBooking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Réservation non trouvée.' });
        }
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la suppression de la réservation.' });
    }
};