const Post  = require('../../models/content/post');

exports.getAllposts = async (req, res) => {
  try {
    const posts = await Post.find().populate('browser app post.contact_address post.locations post.images');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createpost  = async (req, res) => {
  const post  = new Post (req.body);
  try {
    const newpost  = await post.save();
    res.status(201).json(newpost );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getpostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post  = await Post.findById(id).populate('browser app contact_address locations  images');
    if (!post ) {
      return res.status(404).json({ message: 'post  not found' });
    }
    res.status(200).json(post );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatepost  = async (req, res) => {
  const { id } = req.params;
  try {
    const post  = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!post ) {
      return res.status(404).json({ message: 'post  not found' });
    }
    res.status(200).json(post );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletepost  = async (req, res) => {
  const { id } = req.params;
  try {
    const post  = await Post.findByIdAndDelete(id);
    if (!post ) {
      return res.status(404).json({ message: 'post  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
