const Transaction  = require('../models/transaction');

exports.getAlltransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('billing_address payment_method shipping_address ordered_from browser app');
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createtransaction  = async (req, res) => {
  const transaction  = new Transaction (req.body);
  try {
    const newtransaction  = await transaction.save();
    res.status(201).json(newtransaction );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.gettransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction  = await Transaction.findById(id).populate('billing_address payment_method shipping_address ordered_from browser app');
    if (!transaction ) {
      return res.status(404).json({ message: 'transaction  not found' });
    }
    res.status(200).json(transaction );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatetransaction  = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction  = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
    if (!transaction ) {
      return res.status(404).json({ message: 'transaction  not found' });
    }
    res.status(200).json(transaction );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletetransaction  = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction  = await Transaction.findByIdAndDelete(id).populate('billing_address payment_method shipping_address ordered_from browser app');
    if (!transaction ) {
      return res.status(404).json({ message: 'transaction  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
