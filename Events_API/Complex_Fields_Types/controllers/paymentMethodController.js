const PaymentMethod = require('../models/payment_method');

// Create a new payment method
exports.createPaymentMethod = async (req, res) => {
  try {
    const newPaymentMethod = await PaymentMethod.create(req.body);
    res.status(201).json(newPaymentMethod);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all payment methods
exports.getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find();
    res.status(200).json(paymentMethods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single payment method by ID
exports.getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id);
    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    res.status(200).json(paymentMethod);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a payment method by ID
exports.updatePaymentMethodById = async (req, res) => {
  try {
    const updatedPaymentMethod = await PaymentMethod.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPaymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    res.status(200).json(updatedPaymentMethod);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a payment method by ID
exports.deletePaymentMethodById = async (req, res) => {
  try {
    const deletedPaymentMethod = await PaymentMethod.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPaymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    res.status(200).json({ message: 'Payment Method deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
