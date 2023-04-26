const Login  = require('../models/login');

exports.getAlllogins = async (req, res) => {
  try {
    const logins = await Login.find();
    res.status(200).json(logins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createlogin  = async (req, res) => {
  const login  = new Login (req.body);
  try {
    const newlogin  = await login.save();
    res.status(201).json(newlogin );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getloginById = async (req, res) => {
  const { id } = req.params;
  try {
    const login  = await Login.findById(id);
    if (!login ) {
      return res.status(404).json({ message: 'login  not found' });
    }
    res.status(200).json(login );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatelogin  = async (req, res) => {
  const { id } = req.params;
  try {
    const login  = await Login.findByIdAndUpdate(id, req.body, { new: true });
    if (!login ) {
      return res.status(404).json({ message: 'login  not found' });
    }
    res.status(200).json(login );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletelogin  = async (req, res) => {
  const { id } = req.params;
  try {
    const login  = await Login.findByIdAndDelete(id);
    if (!login ) {
      return res.status(404).json({ message: 'login  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
