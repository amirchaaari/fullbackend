const Marchant  = require('../models/marchant');

exports.getAllmarchants = async (req, res) => {
  try {
    const marchants = await Marchant.find();
    res.status(200).json(marchants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createmarchant  = async (req, res) => {
  const marchant  = new Marchant (req.body);
  try {
    const newmarchant  = await marchant.save();
    res.status(201).json(newmarchant );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getmarchantById = async (req, res) => {
  const { id } = req.params;
  try {
    const marchant  = await Marchant.findById(id);
    if (!marchant ) {
      return res.status(404).json({ message: 'marchant  not found' });
    }
    res.status(200).json(marchant );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatemarchant  = async (req, res) => {
  const { id } = req.params;
  try {
    const marchant  = await Marchant.findByIdAndUpdate(id, req.body, { new: true });
    if (!marchant ) {
      return res.status(404).json({ message: 'marchant  not found' });
    }
    res.status(200).json(marchant );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletemarchant  = async (req, res) => {
  const { id } = req.params;
  try {
    const marchant  = await Marchant.findByIdAndDelete(id);
    if (!marchant ) {
      return res.status(404).json({ message: 'marchant  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
