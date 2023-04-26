const DigitalOrder = require('../models/digital_order');

// Create a new digital order
exports.createDigitalOrder = async (req, res) => {
  try {
    const digitalOrder = new DigitalOrder(req.body);
    const savedDigitalOrder = await digitalOrder.save();
    res.status(201).json(savedDigitalOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all digital orders
exports.getAllDigitalOrders = async (req, res) => {
  try {
    const digitalOrders = await DigitalOrder.find();
    res.status(200).json(digitalOrders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific digital order by ID
exports.getDigitalOrderById = async (req, res) => {
  try {
    const digitalOrder = await DigitalOrder.findById(req.params.id);
    if (!digitalOrder) throw new Error('Digital order not found');
    res.status(200).json(digitalOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a specific digital order by ID
exports.updateDigitalOrderById = async (req, res) => {
  try {
    const digitalOrder = await DigitalOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!digitalOrder) throw new Error('Digital order not found');
    res.status(200).json(digitalOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a specific digital order by ID
exports.deleteDigitalOrderById = async (req, res) => {
  try {
    const digitalOrder = await DigitalOrder.findByIdAndDelete(req.params.id);
    if (!digitalOrder) throw new Error('Digital order not found');
    res.status(200).json({ message: 'Digital order deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
