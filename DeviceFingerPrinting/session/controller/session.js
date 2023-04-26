const Session  = require('../models/session');

exports.getAllsessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createsession  = async (req, res) => {
  const session  = new Session (req.body);
  try {
    const newsession  = await session.save();
    res.status(201).json(newsession );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getsessionById = async (req, res) => {
  const { id } = req.params;
  try {
    const session  = await Session.findById(id);
    if (!session ) {
      return res.status(404).json({ message: 'session  not found' });
    }
    res.status(200).json(session );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatesession  = async (req, res) => {
  const { id } = req.params;
  try {
    const session  = await Session.findByIdAndUpdate(id, req.body, { new: true });
    if (!session ) {
      return res.status(404).json({ message: 'session  not found' });
    }
    res.status(200).json(session );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletesession  = async (req, res) => {
  const { id } = req.params;
  try {
    const session  = await Session.findByIdAndDelete(id);
    if (!session ) {
      return res.status(404).json({ message: 'session  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
