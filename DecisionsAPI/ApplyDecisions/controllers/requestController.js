const RequestDecision  = require('../models/requestDecision');

exports.getAllrequestDecisions = async (req, res) => {
  try {
    const requestDecisions = await RequestDecision.find();
    res.status(200).json(requestDecisions );

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const requestDecision  = new RequestDecision (req.body);
  try {
    const newrequestDecision  = await requestDecision.save();
    res.status(201).json(newrequestDecision );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getrequestDecisionById = async (req, res) => {
  const { id } = req.params;
  try {
    const requestDecision  = await RequestDecision.findById(id);
    if (!requestDecision ) {
      return res.status(404).json({ message: 'requestDecision  not found' });
    }
    res.status(200).json(requestDecision );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updaterequestDecision  = async (req, res) => {
  const { id } = req.params;
  try {
    const requestDecision  = await RequestDecision.findByIdAndUpdate(id, req.body, { new: true });
    if (!requestDecision ) {
      return res.status(404).json({ message: 'requestDecision  not found' });
    }
    res.status(200).json(requestDecision );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleterequestDecision  = async (req, res) => {
  const { id } = req.params;
  try {
    const requestDecision  = await RequestDecision.findByIdAndDelete(id);
    if (!requestDecision ) {
      return res.status(404).json({ message: 'requestDecision  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
