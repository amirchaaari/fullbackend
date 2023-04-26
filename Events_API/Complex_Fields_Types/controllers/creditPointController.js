const CreditPoint = require('../models/credit_point');

exports.getAllCreditPoints = async (req, res) => {
  try {
    const creditPoints = await CreditPoint.find();
    res.status(200).json(creditPoints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCreditPointById = async (req, res) => {
  try {
    const creditPoint = await CreditPoint.findById(req.params.id);
    if (!creditPoint) {
      return res.status(404).json({ error: 'Credit point not found' });
    }
    res.status(200).json(creditPoint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCreditPoint = async (req, res) => {
  try {
    const newCreditPoint = new CreditPoint({
      amount: req.body.amount,
      credit_point_type: req.body.credit_point_type,
    });
    const savedCreditPoint = await newCreditPoint.save();
    res.status(201).json(savedCreditPoint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCreditPointById = async (req, res) => {
  try {
    const creditPoint = await CreditPoint.findById(req.params.id);
    if (!creditPoint) {
      return res.status(404).json({ error: 'Credit point not found' });
    }
    creditPoint.amount = req.body.amount;
    creditPoint.credit_point_type = req.body.credit_point_type;
    const savedCreditPoint = await creditPoint.save();
    res.status(200).json(savedCreditPoint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCreditPointById = async (req, res) => {
  try {
    const creditPoint = await CreditPoint.findById(req.params.id);
    if (!creditPoint) {
      return res.status(404).json({ error: 'Credit point not found' });
    }
    await creditPoint.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
