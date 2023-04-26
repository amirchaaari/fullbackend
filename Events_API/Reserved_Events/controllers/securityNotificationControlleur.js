const SecurityNotification  = require('../models/security_notification');

exports.getAllsecurityNotifications = async (req, res) => {
  try {
    const securityNotifications = await SecurityNotification.find().populate('browser app');
    res.status(200).json(securityNotifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createsecurityNotification  = async (req, res) => {
  const securityNotification  = new SecurityNotification (req.body);
  try {
    const newsecurityNotification  = await securityNotification.save();
    res.status(201).json(newsecurityNotification );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getsecurityNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const securityNotification  = await SecurityNotification.findById(id).populate('browser app');
    if (!securityNotification ) {
      return res.status(404).json({ message: 'security Notification  not found' });
    }
    res.status(200).json(securityNotification );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatesecurityNotification  = async (req, res) => {
  const { id } = req.params;
  try {
    const securityNotification  = await SecurityNotification.findByIdAndUpdate(id, req.body, { new: true });
    if (!securityNotification ) {
      return res.status(404).json({ message: 'security Notification  not found' });
    }
    res.status(200).json(securityNotification );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletesecurityNotification  = async (req, res) => {
  const { id } = req.params;
  try {
    const securityNotification  = await SecurityNotification.findByIdAndDelete(id);
    if (!securityNotification ) {
      return res.status(404).json({ message: 'security Notification  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
