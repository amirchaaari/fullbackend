const Device  = require('../models/device');

exports.getAlldevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createdevice  = async (req, res) => {
  const device  = new Device (req.body);
  try {
    const newdevice  = await device.save();
    res.status(201).json(newdevice );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getdeviceById = async (req, res) => {
  const { id } = req.params;
  try {
    const device  = await Device.findById(id);
    if (!device ) {
      return res.status(404).json({ message: 'device  not found' });
    }
    res.status(200).json(device );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatedevice  = async (req, res) => {
  const { id } = req.params;
  try {
    const device  = await Device.findByIdAndUpdate(id, req.body, { new: true });
    if (!device ) {
      return res.status(404).json({ message: 'device  not found' });
    }
    res.status(200).json(device );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletedevice  = async (req, res) => {
  const { id } = req.params;
  try {
    const device  = await Device.findByIdAndDelete(id);
    if (!device ) {
      return res.status(404).json({ message: 'device  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
