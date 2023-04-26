const Review  = require('../../models/content/review');

exports.getAllreviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('browser app review.locations review.item_reviewed review.images');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreview  = async (req, res) => {
  const review  = new Review (req.body);
  try {
    const newreview  = await review.save();
    res.status(201).json(newreview );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getreviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review  = await Review.findById(id).populate('browser app review.locations review.item_reviewed review.images');
    if (!review ) {
      return res.status(404).json({ message: 'review  not found' });
    }
    res.status(200).json(review );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatereview  = async (req, res) => {
  const { id } = req.params;
  try {
    const review  = await Review.findByIdAndUpdate(id, req.body, { new: true });
    if (!review ) {
      return res.status(404).json({ message: 'review  not found' });
    }
    res.status(200).json(review );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletereview  = async (req, res) => {
  const { id } = req.params;
  try {
    const review  = await Review.findByIdAndDelete(id);
    if (!review ) {
      return res.status(404).json({ message: 'review  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
