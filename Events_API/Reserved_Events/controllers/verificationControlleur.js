const Verification  = require('../models/verification');

exports.getAllverifications = async (req, res) => {
  try {
    const verifications = await Verification.find().populate('browser app');
    res.status(200).json(verifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createverification  = async (req, res) => {
  const verification  = new Verification (req.body);
  try {
    const newverification  = await verification.save();
    res.status(201).json(newverification );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getverificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const verification  = await Verification.findById(id);
    if (!verification ) {
      return res.status(404).json({ message: 'verification  not found' });
    }
    res.status(200).json(verification );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateverification  = async (req, res) => {
  const { id } = req.params;
  try {
    const verification  = await Verification.findByIdAndUpdate(id, req.body, { new: true });
    if (!verification ) {
      return res.status(404).json({ message: 'verification  not found' });
    }
    res.status(200).json(verification );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteverification  = async (req, res) => {
  const { id } = req.params;
  try {
    const verification  = await Verification.findByIdAndDelete(id).populate('browser app');
    if (!verification ) {
      return res.status(404).json({ message: 'verification  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
