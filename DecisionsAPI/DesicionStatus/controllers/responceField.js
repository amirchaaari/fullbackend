const ResponceField  = require('../models/responceField');

exports.getAllresponceFields = async (req, res) => {
  try {
    const responceFields = await ResponceField.find();
    res.status(200).json(responceFields );

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const responceField  = new ResponceField (req.body);
  try {
    const newresponceField  = await responceField.save();
    res.status(201).json(newresponceField );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getresponceFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const responceField  = await ResponceField.findById(id);
    if (!responceField ) {
      return res.status(404).json({ message: 'responceField  not found' });
    }
    res.status(200).json(responceField );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateresponceField  = async (req, res) => {
  const { id } = req.params;
  try {
    const responceField  = await ResponceField.findByIdAndUpdate(id, req.body, { new: true });
    if (!responceField ) {
      return res.status(404).json({ message: 'responceField  not found' });
    }
    res.status(200).json(responceField );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteresponceField  = async (req, res) => {
  const { id } = req.params;
  try {
    const responceField  = await ResponceField.findByIdAndDelete(id);
    if (!responceField ) {
      return res.status(404).json({ message: 'responceField  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};