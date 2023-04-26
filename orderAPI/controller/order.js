const Order  = require('../models/order');

exports.getAllorders = async (req, res) => {
  try {
    const orders = await Order.find().populate('payment_methods').populate('ordered_from').populate('shipping_address items bookings transactions chargebacks latest_decisions scores');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createorder  = async (req, res) => {
  const order  = new Order (req.body);
  try {
    const neworder  = await order.save();
    res.status(201).json(neworder );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getorderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findById(id).populate('payment_methods').populate('ordered_from').populate('shipping_address items bookings transactions chargebacks latest_decisions scores');
    if (!order ) {
      return res.status(404).json({ message: 'order  not found' });
    }
    res.status(200).json(order );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateorder  = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!order ) {
      return res.status(404).json({ message: 'order  not found' });
    }
    res.status(200).json(order );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteorder  = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findByIdAndDelete(id);
    if (!order ) {
      return res.status(404).json({ message: 'order  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
