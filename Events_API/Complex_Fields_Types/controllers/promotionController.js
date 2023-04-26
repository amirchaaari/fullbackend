const Promotion = require('../models/promotion');


// Ajouter une promotion
exports.createPromotion = async (req, res) => {
  try {
    const newPromotion = await Promotion.create(req.body);
    res.status(201).json(newPromotion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Afficher toutes les promotions
exports.getPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find().populate('discount').populate('credit_point');;
    res.status(200).json(promotions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Afficher une promotion spécifique
exports.getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id).populate('discount').populate('credit_point');
    if (!promotion) {
      res.status(404).json({ message: "La promotion n'a pas été trouvée" });
    }
    res.status(200).json(promotion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Mettre à jour une promotion
exports.updatePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!promotion) {
      res.status(404).json({ message: "La promotion n'a pas été trouvée" });
    }
    res.status(200).json(promotion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une promotion
exports.deletePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndDelete(req.params.id);
    if (!promotion) {
      res.status(404).json({ message: "La promotion n'a pas été trouvée" });
    }
    res.status(200).json({ message: 'La promotion a été supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
