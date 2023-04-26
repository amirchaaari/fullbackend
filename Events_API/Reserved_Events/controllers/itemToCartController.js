const ItemToCart  = require('../models/content_status');

exports.getAllitemToCarts = async (req, res) => {
  try {
    const itemToCarts = await ItemToCart.find().populate('item browser app');
    res.status(200).json(itemToCarts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createitemToCart  = async (req, res) => {
  const itemToCart  = new ItemToCart (req.body);
  try {
    const newitemToCart  = await itemToCart.save();
    res.status(201).json(newitemToCart );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getitemToCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const itemToCart  = await ItemToCart.findById(id).populate('item browser app');
    if (!itemToCart ) {
      return res.status(404).json({ message: 'itemToCart  not found' });
    }
    res.status(200).json(itemToCart );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateitemToCart  = async (req, res) => {
  const { id } = req.params;
  try {
    const itemToCart  = await ItemToCart.findByIdAndUpdate(id, req.body, { new: true });
    if (!itemToCart ) {
      return res.status(404).json({ message: 'itemToCart  not found' });
    }
    res.status(200).json(itemToCart );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteitemToCart  = async (req, res) => {
  const { id } = req.params;
  try {
    const itemToCart  = await ItemToCart.findByIdAndDelete(id);
    if (!itemToCart ) {
      return res.status(404).json({ message: 'itemToCart  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
