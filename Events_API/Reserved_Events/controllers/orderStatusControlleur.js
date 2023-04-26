const OrderStatus  = require('../models/order_status');

exports.getAllorderStatuss = async (req, res) => {
  try {
    const orderStatuss = await OrderStatus.find().populate('browser app');
    res.status(200).json(orderStatuss);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createorderStatus  = async (req, res) => {
  const orderStatus  = new OrderStatus (req.body);
  try {
    const neworderStatus  = await orderStatus.save();
    res.status(201).json(neworderStatus );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getorderStatusById = async (req, res) => {
  const { id } = req.params;
  try {
    const orderStatus  = await OrderStatus.findById(id).populate('browser app');
    if (!orderStatus ) {
      return res.status(404).json({ message: 'orderStatus  not found' });
    }
    res.status(200).json(orderStatus );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateorderStatus  = async (req, res) => {
  const { id } = req.params;
  try {
    const orderStatus  = await OrderStatus.findByIdAndUpdate(id, req.body, { new: true });
    if (!orderStatus ) {
      return res.status(404).json({ message: 'orderStatus  not found' });
    }
    res.status(200).json(orderStatus );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteorderStatus  = async (req, res) => {
  const { id } = req.params;
  try {
    const orderStatus  = await OrderStatus.findByIdAndDelete(id);
    if (!orderStatus ) {
      return res.status(404).json({ message: 'orderStatus  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
