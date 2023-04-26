const Request  = require('../models/request');

exports.getAllrequests = async (req, res) => {
  try {
    const requests = await Request.find();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createreqsuestDecision  = async (req, res) => {
  const request  = new Request (req.body);
  try {
    const newrequest  = await request.save();
    res.status(201).json(newrequest );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getrequestById = async (req, res) => {
  const { id } = req.params;
  try {
    const request  = await Request.findById(id);
    if (!request ) {
      return res.status(404).json({ message: 'request  not found' });
    }
    res.status(200).json(request );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updaterequest  = async (req, res) => {
  const { id } = req.params;
  try {
    const request  = await Request.findByIdAndUpdate(id, req.body, { new: true });
    if (!request ) {
      return res.status(404).json({ message: 'request  not found' });
    }
    res.status(200).json(request );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleterequest  = async (req, res) => {
  const { id } = req.params;
  try {
    const request  = await Request.findByIdAndDelete(id);
    if (!request ) {
      return res.status(404).json({ message: 'request  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};