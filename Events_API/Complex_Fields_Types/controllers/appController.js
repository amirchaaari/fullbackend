const App = require('../models/app');

exports.getAllApps = async (req, res) => {
  try {
    const apps = await App.find();
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createApp = async (req, res) => {
  const app = new App(req.body);
  try {
    const newApp = await app.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAppById = async (req, res) => {
  const { id } = req.params;
  try {
    const app = await App.findById(id);
    if (!app) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.status(200).json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateApp = async (req, res) => {
  const { id } = req.params;
  try {
    const app = await App.findByIdAndUpdate(id, req.body, { new: true });
    if (!app) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.status(200).json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteApp = async (req, res) => {
  const { id } = req.params;
  try {
    const app = await App.findByIdAndDelete(id);
    if (!app) {
      return res.status(404).json({ message: 'App not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
