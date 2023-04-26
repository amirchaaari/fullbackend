const Chargeback  = require('../models/chargeback');

exports.getAllchargebacks = async (req, res) => {
  try {
    const chargebacks = await Chargeback.find().populate('merchant_profile');
    res.status(200).json(chargebacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createchargeback  = async (req, res) => {
  const chargeback  = new Chargeback (req.body);
  try {
    const newchargeback  = await chargeback.save();
    res.status(201).json(newchargeback );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getchargebackById = async (req, res) => {
  const { id } = req.params;
  try {
    const chargeback  = await Chargeback.findById(id).populate('merchant_profile');
    if (!chargeback ) {
      return res.status(404).json({ message: 'chargeback  not found' });
    }
    res.status(200).json(chargeback );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatechargeback  = async (req, res) => {
  const { id } = req.params;
  try {
    const chargeback  = await Chargeback.findByIdAndUpdate(id, req.body, { new: true });
    if (!chargeback ) {
      return res.status(404).json({ message: 'chargeback  not found' });
    }
    res.status(200).json(chargeback );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletechargeback  = async (req, res) => {
  const { id } = req.params;
  try {
    const chargeback  = await Chargeback.findByIdAndDelete(id);
    if (!chargeback ) {
      return res.status(404).json({ message: 'chargeback  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
