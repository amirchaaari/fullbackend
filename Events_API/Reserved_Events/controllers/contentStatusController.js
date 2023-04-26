const ContentStatus  = require('../models/content_status');

exports.getAllcontentStatuss = async (req, res) => {
  try {
    const contentStatuss = await ContentStatus.find().populate('browser app');
    res.status(200).json(contentStatuss);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createcontentStatus  = async (req, res) => {
  const contentStatus  = new ContentStatus (req.body);
  try {
    const newcontentStatus  = await contentStatus.save();
    res.status(201).json(newcontentStatus );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getcontentStatusById = async (req, res) => {
  const { id } = req.params;
  try {
    const contentStatus  = await ContentStatus.findById(id).populate('browser app');
    if (!contentStatus ) {
      return res.status(404).json({ message: 'contentStatus  not found' });
    }
    res.status(200).json(contentStatus );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatecontentStatus  = async (req, res) => {
  const { id } = req.params;
  try {
    const contentStatus  = await ContentStatus.findByIdAndUpdate(id, req.body, { new: true });
    if (!contentStatus ) {
      return res.status(404).json({ message: 'contentStatus  not found' });
    }
    res.status(200).json(contentStatus );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletecontentStatus  = async (req, res) => {
  const { id } = req.params;
  try {
    const contentStatus  = await ContentStatus.findByIdAndDelete(id);
    if (!contentStatus ) {
      return res.status(404).json({ message: 'contentStatus  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
