const Cruise = require('../../models/booking/cruise');

// Fonction pour créer une nouvelle croisière
exports.createCruise = async (req, res) => {
    try {
        const cruise = await Cruise.create(req.body);
        res.status(201).json({ success: true, data: cruise });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Fonction pour récupérer toutes les croisières
exports.getAllCruises = async (req, res) => {
    try {
        const cruises = await Cruise.find().populate('guests').populate('segments');
        res.status(200).json({ success: true, data: cruises });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Fonction pour récupérer une croisière par ID
exports.getCruiseById = async (req, res) => {
    try {
        const cruise = await Cruise.findById(req.params.id).populate('guests').populate('segments');
        if (!cruise) {
            return res.status(404).json({ success: false, error: 'Cruise not found' });
        }
        res.status(200).json({ success: true, data: cruise });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Fonction pour mettre à jour une croisière
exports.updateCruise = async (req, res) => {
    try {
        const cruise = await Cruise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cruise) {
            return res.status(404).json({ success: false, error: 'Cruise not found' });
        }
        res.status(200).json({ success: true, data: cruise });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Fonction pour supprimer une croisière
exports.deleteCruise = async (req, res) => {
    try {
        const cruise = await Cruise.findByIdAndDelete(req.params.id);
        if (!cruise) {
            return res.status(404).json({ success: false, error: 'Cruise not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

