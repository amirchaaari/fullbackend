const LinkSessionToUserController  = require('../models/link_session_to_user');

exports.getAlllinkSessionToUserControllers = async (req, res) => {
  try {
    const linkSessionToUserControllers = await LinkSessionToUserController.find();
    res.status(200).json(linkSessionToUserControllers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createlinkSessionToUserController  = async (req, res) => {
  const linkSessionToUserController  = new LinkSessionToUserController (req.body);
  try {
    const newlinkSessionToUserController  = await linkSessionToUserController.save();
    res.status(201).json(newlinkSessionToUserController );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getlinkSessionToUserControllerById = async (req, res) => {
  const { id } = req.params;
  try {
    const linkSessionToUserController  = await LinkSessionToUserController.findById(id);
    if (!linkSessionToUserController ) {
      return res.status(404).json({ message: 'link Session To User   not found' });
    }
    res.status(200).json(linkSessionToUserController );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatelinkSessionToUserController  = async (req, res) => {
  const { id } = req.params;
  try {
    const linkSessionToUserController  = await LinkSessionToUserController.findByIdAndUpdate(id, req.body, { new: true });
    if (!linkSessionToUserController ) {
      return res.status(404).json({ message: 'link Session To User   not found' });
    }
    res.status(200).json(linkSessionToUserController );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletelinkSessionToUserController  = async (req, res) => {
  const { id } = req.params;
  try {
    const linkSessionToUserController  = await LinkSessionToUserController.findByIdAndDelete(id);
    if (!linkSessionToUserController ) {
      return res.status(404).json({ message: 'link Session To User  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};