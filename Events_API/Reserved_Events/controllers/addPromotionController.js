const AddPromotion  = require('../models/add_promotion');

exports.getAllAddPromotions = async (req, res) => {
  try {
    const addPromotions = await AddPromotion.find().populate('promotions').populate('browser').populate('app');
    res.status(200).json(addPromotions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAddPromotion  = async (req, res) => {
  const addPromotion  = new AddPromotion (req.body);
  try {
    const newAddPromotion  = await addPromotion.save();
    res.status(201).json(newAddPromotion );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAddPromotionById = async (req, res) => {
  const { id } = req.params;
  try {
    const addPromotion  = await AddPromotion.findById(id).populate('promotions').populate('browser').populate('app');
    if (!addPromotion ) {
      return res.status(404).json({ message: 'AddPromotion  not found' });
    }
    res.status(200).json(addPromotion );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAddPromotion  = async (req, res) => {
  const { id } = req.params;
  try {
    const addPromotion  = await AddPromotion.findByIdAndUpdate(id, req.body, { new: true });
    if (!addPromotion ) {
      return res.status(404).json({ message: 'AddPromotion  not found' });
    }
    res.status(200).json(addPromotion );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAddPromotion  = async (req, res) => {
  const { id } = req.params;
  try {
    const addPromotion  = await AddPromotion.findByIdAndDelete(id);
    if (!addPromotion ) {
      return res.status(404).json({ message: 'AddPromotion  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
