const FlagContent  = require('../models/flag_content');

exports.getAllflagContents = async (req, res) => {
  try {
    const flagContents = await FlagContent.find();
    res.status(200).json(flagContents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createflagContent  = async (req, res) => {
  const flagContent  = new FlagContent (req.body);
  try {
    const newflagContent  = await flagContent.save();
    res.status(201).json(newflagContent );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getflagContentById = async (req, res) => {
  const { id } = req.params;
  try {
    const flagContent  = await FlagContent.findById(id);
    if (!flagContent ) {
      return res.status(404).json({ message: 'flagContent  not found' });
    }
    res.status(200).json(flagContent );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateflagContent  = async (req, res) => {
  const { id } = req.params;
  try {
    const flagContent  = await FlagContent.findByIdAndUpdate(id, req.body, { new: true });
    if (!flagContent ) {
      return res.status(404).json({ message: 'flagContent  not found' });
    }
    res.status(200).json(flagContent );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteflagContent  = async (req, res) => {
  const { id } = req.params;
  try {
    const flagContent  = await FlagContent.findByIdAndDelete(id);
    if (!flagContent ) {
      return res.status(404).json({ message: 'flagContent  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


