const Label  = require('../models/Label');

exports.getAlllabels = async (req, res) => {
  try {
    const labels = await Label.find();
    res.status(200).json(labels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createlabel  = async (req, res) => {
  const label  = new Label (req.body);
  try {
    const newlabel  = await label.save();
    res.status(201).json(newlabel );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getlabelById = async (req, res) => {
  const { id } = req.params;
  try {
    const label  = await Label.findById(id);
    if (!label ) {
      return res.status(404).json({ message: 'label  not found' });
    }
    res.status(200).json(label );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatelabel  = async (req, res) => {
  const { id } = req.params;
  try {
    const label  = await Label.findByIdAndUpdate(id, req.body, { new: true });
    if (!label ) {
      return res.status(404).json({ message: 'label  not found' });
    }
    res.status(200).json(label );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletelabel  = async (req, res) => {
  const { id } = req.params;
  try {
    const label  = await Label.findByIdAndDelete(id);
    if (!label ) {
      return res.status(404).json({ message: 'label  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
