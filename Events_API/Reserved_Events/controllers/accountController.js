const Account  = require('../models/account');

exports.getAllaccounts = async (req, res) => {
  try {
    const accounts = await Account.find().populate('payment_methods').populate('billing_address').populate('shipping_address promotions browser app merchant_profile');
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createaccount  = async (req, res) => {
  const account  = new Account (req.body);
  try {
    const newaccount  = await account.save();
    res.status(201).json(newaccount );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getaccountById = async (req, res) => {
  const { id } = req.params;
  try {
    const account  = await Account.findById(id).populate('payment_methods').populate('billing_address').populate('shipping_address promotions browser app merchant_profile');
    if (!account ) {
      return res.status(404).json({ message: 'account  not found' });
    }
    res.status(200).json(account );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateaccount  = async (req, res) => {
  const { id } = req.params;
  try {
    const account  = await Account.findByIdAndUpdate(id, req.body, { new: true });
    if (!account ) {
      return res.status(404).json({ message: 'account  not found' });
    }
    res.status(200).json(account );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteaccount  = async (req, res) => {
  const { id } = req.params;
  try {
    const account  = await Account.findByIdAndDelete(id);
    if (!account ) {
      return res.status(404).json({ message: 'account  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
