const Discount = require('../models/discount');

exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.status(200).json(discounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDiscount = async (req, res) => {
  try {
    const discount = new Discount({
      percentage_off: req.body.percentage_off,
      amount: req.body.amount,
      currency_code: req.body.currency_code,
      minimum_purchase_amount: req.body.minimum_purchase_amount
    });
    const newDiscount = await discount.save();
    res.status(201).json(newDiscount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);
    if (discount == null) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    res.json(discount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);
    if (discount == null) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    discount.percentage_off = req.body.percentage_off || discount.percentage_off;
    discount.amount = req.body.amount || discount.amount;
    discount.currency_code = req.body.currency_code || discount.currency_code;
    discount.minimum_purchase_amount = req.body.minimum_purchase_amount || discount.minimum_purchase_amount;
    const updatedDiscount = await discount.save();
    res.json(updatedDiscount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);
    if (discount == null) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    await discount.remove();
    res.json({ message: 'Discount deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
