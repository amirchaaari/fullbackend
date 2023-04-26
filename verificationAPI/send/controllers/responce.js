const Responce  = require('../models/responce');

exports.getAllresponces = async (req, res) => {
  try {
    const responces = await Responce.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const responce  = new Responce (req.body);
  try {
    const newresponce  = await responce.save();
    res.status(201).json(newresponce );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getresponceById = async (req, res) => {
  const { id } = req.params;
  try {
    const responce  = await Responce.findById(id);
    if (!responce ) {
      return res.status(404).json({ message: 'responce  not found' });
    }
    res.status(200).json(responce );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateresponce  = async (req, res) => {
  const { id } = req.params;
  try {
    const responce  = await Responce.findByIdAndUpdate(id, req.body, { new: true });
    if (!responce ) {
      return res.status(404).json({ message: 'responce  not found' });
    }
    res.status(200).json(responce );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteresponce  = async (req, res) => {
  const { id } = req.params;
  try {
    const responce  = await Responce.findByIdAndDelete(id);
    if (!responce ) {
      return res.status(404).json({ message: 'responce  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
