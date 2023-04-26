const OrderFrom = require('../models/ordered_from');

exports.getOrderFrom = async (req, res) => {
  try {
    const orderFrom = await OrderFrom.findById(req.params.id).populate('store_address');
    res.status(200).json(orderFrom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



exports.getAllorderFrom = async (req, res) => {
    try {
      const orderFrom = await OrderFrom.find().populate('store_address');
      res.status(200).json(orderFrom);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


exports.createOrderFrom = async (req, res) => {
  const orderFrom = new OrderFrom({
    store_id: req.body.store_id,
    store_address: req.body.store_address
  });

  try {
    const newOrderFrom = await orderFrom.save();
    res.status(201).json(newOrderFrom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.updateOrderFrom = async (req, res) => {
  try {
    const orderFrom = await OrderFrom.findById(req.params.id);
    if (req.body.store_id) {
      orderFrom.store_id = req.body.store_id;
    }
    if (req.body.store_address) {
      orderFrom.store_address = req.body.store_address;
    }
    const updatedOrderFrom = await orderFrom.save();
    res.status(200).json(updatedOrderFrom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.deleteOrderFrom = async (req, res) => {
  try {
    const orderFrom = await OrderFrom.findById(req.params.id);
    await orderFrom.remove();
    res.status(200).json({ message: "OrderFrom deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
