const Webhooks  = require('../models/webhooks');

exports.getAllwebhookss = async (req, res) => {
  try {
    const webhookss = await Webhooks.find();
    res.status(200).json(webhookss );

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const webhooks  = new Webhooks (req.body);
  try {
    const newwebhooks  = await webhooks.save();
    res.status(201).json(newwebhooks );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getwebhooksById = async (req, res) => {
  const { id } = req.params;
  try {
    const webhooks  = await Webhooks.findById(id);
    if (!webhooks ) {
      return res.status(404).json({ message: 'webhooks  not found' });
    }
    res.status(200).json(webhooks );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatewebhooks  = async (req, res) => {
  const { id } = req.params;
  try {
    const webhooks  = await Webhooks.findByIdAndUpdate(id, req.body, { new: true });
    if (!webhooks ) {
      return res.status(404).json({ message: 'webhooks  not found' });
    }
    res.status(200).json(webhooks );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletewebhooks  = async (req, res) => {
  const { id } = req.params;
  try {
    const webhooks  = await Webhooks.findByIdAndDelete(id);
    if (!webhooks ) {
      return res.status(404).json({ message: 'webhooks  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};