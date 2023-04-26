const Message  = require('../../models/content/message');

exports.getAllmessages = async (req, res) => {
  try {
    const messages = await Message.find().populate('browser app message.images');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createmessage  = async (req, res) => {
  const message  = new Message (req.body);
  try {
    const newmessage  = await message.save();
    res.status(201).json(newmessage );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getmessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const message  = await Message.findById(id).populate('browser app images ');
    if (!message ) {
      return res.status(404).json({ message: 'message  not found' });
    }
    res.status(200).json(message );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatemessage  = async (req, res) => {
  const { id } = req.params;
  try {
    const message  = await Message.findByIdAndUpdate(id, req.body, { new: true });
    if (!message ) {
      return res.status(404).json({ message: 'message  not found' });
    }
    res.status(200).json(message );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletemessage  = async (req, res) => {
  const { id } = req.params;
  try {
    const message  = await Message.findByIdAndDelete(id);
    if (!message ) {
      return res.status(404).json({ message: 'message  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
