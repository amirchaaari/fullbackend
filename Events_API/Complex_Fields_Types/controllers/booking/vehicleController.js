const Vehicle = require('../../models/booking/vehicle');

// Créer une nouvelle réservation pour un véhicule
exports.createVehicle = async (req, res) => {
    try {
        const newVehicle = await Vehicle.create(req.body);
        res.status(201).json(newVehicle);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de la réservation pour ce véhicule.' });
    }
};

// Récupérer toutes les réservations pour les véhicules
exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('guests').populate('segments');
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des réservations pour les véhicules.' });
    }
};

// Récupérer une réservation pour un véhicule par son ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id).populate('guests').populate('segments');
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({
                message: 'La réservation pour ce véhicule na pas été trouvée.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la réservation pour ce véhicule.' });
    }
};

// Mettre à jour une réservation pour un véhicule par son ID
exports.updateVehicle = async (req, res) => {
    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedVehicle) {
            res.status(200).json(updatedVehicle);
        } else {
            res.status(404).json({
                message: 'La réservation pour ce véhicule na pas été trouvée.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de la réservation pour ce véhicule.' });
    }
};

// Supprimer une réservation pour un véhicule par son ID
exports.deleteVehicle = async (req, res) => {
    try {
        const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (deletedVehicle) {
            res.status(200).json({ message: 'La réservation pour ce véhicule a été supprimée avec succès.' });
        } else {
            res.status(404).json({
                message: 'La réservation pour ce véhicule na pas été trouvée.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la réservation pour ce véhicule.' });
    }
};



