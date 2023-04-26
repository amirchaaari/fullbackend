const Logout  = require('../models/logout');

exports.getAlllogouts = async (req, res) => {
  try {
    const logouts = await Logout.find();
    res.status(200).json(logouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createlogout  = async (req, res) => {
  const logout  = new Logout (req.body);
  try {
    const newlogout  = await logout.save();
    res.status(201).json(newlogout );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getlogoutById = async (req, res) => {
  const { id } = req.params;
  try {
    const logout  = await Logout.findById(id);
    if (!logout ) {
      return res.status(404).json({ message: 'logout  not found' });
    }
    res.status(200).json(logout );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatelogout  = async (req, res) => {
  const { id } = req.params;
  try {
    const logout  = await Logout.findByIdAndUpdate(id, req.body, { new: true });
    if (!logout ) {
      return res.status(404).json({ message: 'logout  not found' });
    }
    res.status(200).json(logout );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletelogout  = async (req, res) => {
  const { id } = req.params;
  try {
    const logout  = await Logout.findByIdAndDelete(id);
    if (!logout ) {
      return res.status(404).json({ message: 'logout  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
