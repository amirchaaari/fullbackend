const ResponceDecision  = require('../models/responceDecision');

exports.getAllresponceDecisions = async (req, res) => {
  try {
    const responceDecisions = await ResponceDecision.find();
    res.status(200).json(responceDecisions);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createresponceDecision  = async (req, res) => {
  const responceDecision  = new ResponceDecision (req.body);
  try {
    const newresponceDecision  = await responceDecision.save();
    res.status(201).json(newresponceDecision );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getresponceDecisionById = async (req, res) => {
  const { id } = req.params;
  try {
    const responceDecision  = await ResponceDecision.findById(id);
    if (!responceDecision ) {
      return res.status(404).json({ message: 'responceDecision  not found' });
    }
    res.status(200).json(responceDecision );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateresponceDecision  = async (req, res) => {
  const { id } = req.params;
  try {
    const responceDecision  = await ResponceDecision.findByIdAndUpdate(id, req.body, { new: true });
    if (!responceDecision ) {
      return res.status(404).json({ message: 'responceDecision  not found' });
    }
    res.status(200).json(responceDecision );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteresponceDecision  = async (req, res) => {
  const { id } = req.params;
  try {
    const responceDecision  = await ResponceDecision.findByIdAndDelete(id);
    if (!responceDecision ) {
      return res.status(404).json({ message: 'responceDecision  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
