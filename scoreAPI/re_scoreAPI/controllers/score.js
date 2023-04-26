const Score  = require('../models/score');

exports.getAllscores = async (req, res) => {
  try {
    const scores = await Score.find().populate('latest_decisions latest_labels');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createscore  = async (req, res) => {
  const score  = new Score (req.body);
  try {
    const newscore  = await score.save();
    res.status(201).json(newscore );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getscoreById = async (req, res) => {
  const { id } = req.params;
  try {
    const score  = await Score.findById(id);
    if (!score ) {
      return res.status(404).json({ message: 'score  not found' });
    }
    res.status(200).json(score );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatescore  = async (req, res) => {
  const { id } = req.params;
  try {
    const score  = await Score.findByIdAndUpdate(id, req.body, { new: true });
    if (!score ) {
      return res.status(404).json({ message: 'score  not found' });
    }
    res.status(200).json(score );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletescore  = async (req, res) => {
  const { id } = req.params;
  try {
    const score  = await Score.findByIdAndDelete(id).populate('latest_decisions latest_labels');
    if (!score ) {
      return res.status(404).json({ message: 'score  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
