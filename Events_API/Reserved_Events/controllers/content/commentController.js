const Comment  = require('../../models/content/comment');

exports.getAllcomments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('browser app comment.images');
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createcomment  = async (req, res) => {
  const comment  = new Comment (req.body);
  try {
    const newcomment  = await comment.save();
    res.status(201).json(newcomment );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getcommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment  = await Comment.findById(id).populate('browser app images ');
    if (!comment ) {
      return res.status(404).json({ message: 'comment  not found' });
    }
    res.status(200).json(comment );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatecomment  = async (req, res) => {
  const { id } = req.params;
  try {
    const comment  = await Comment.findByIdAndUpdate(id, req.body, { new: true });
    if (!comment ) {
      return res.status(404).json({ message: 'comment  not found' });
    }
    res.status(200).json(comment );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletecomment  = async (req, res) => {
  const { id } = req.params;
  try {
    const comment  = await Comment.findByIdAndDelete(id);
    if (!comment ) {
      return res.status(404).json({ message: 'comment  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
