const User  = require('../model/user');

exports.getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createuser  = async (req, res) => {
  const user  = new User (req.body);
  try {
    const newuser  = await user.save();
    res.status(201).json(newuser );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getuserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user  = await User.findById(id);
    if (!user ) {
      return res.status(404).json({ message: 'user  not found' });
    }
    res.status(200).json(user );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateuser  = async (req, res) => {
  const { id } = req.params;
  try {
    const user  = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user ) {
      return res.status(404).json({ message: 'user  not found' });
    }
    res.status(200).json(user );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteuser  = async (req, res) => {
  const { id } = req.params;
  try {
    const user  = await User.findByIdAndDelete(id);
    if (!user ) {
      return res.status(404).json({ message: 'user  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
