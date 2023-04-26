const QueryParametres  = require('../models/queryParametres');

exports.getAllqueryParametress = async (req, res) => {
  try {
    const queryParametress = await QueryParametres.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const queryParametres  = new QueryParametres (req.body);
  try {
    const newqueryParametres  = await queryParametres.save();
    res.status(201).json(newqueryParametres );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getqueryParametresById = async (req, res) => {
  const { id } = req.params;
  try {
    const queryParametres  = await QueryParametres.findById(id);
    if (!queryParametres ) {
      return res.status(404).json({ message: 'queryParametres  not found' });
    }
    res.status(200).json(queryParametres );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatequeryParametres  = async (req, res) => {
  const { id } = req.params;
  try {
    const queryParametres  = await QueryParametres.findByIdAndUpdate(id, req.body, { new: true });
    if (!queryParametres ) {
      return res.status(404).json({ message: 'queryParametres  not found' });
    }
    res.status(200).json(queryParametres );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletequeryParametres  = async (req, res) => {
  const { id } = req.params;
  try {
    const queryParametres  = await QueryParametres.findByIdAndDelete(id);
    if (!queryParametres ) {
      return res.status(404).json({ message: 'queryParametres  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};