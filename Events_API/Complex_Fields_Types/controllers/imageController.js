const Image = require('../models/image');

exports.createImage = (req, res) => {
  const newImage = new Image(req.body);

  newImage.save((err, image) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to save image' });
    }
    res.json({ message: 'Image saved successfully', image });
  });
};

exports.getImageById = (req, res) => {
  Image.findById(req.params.id, (err, image) => {
    if (err) {
      return res.status(400).json({ error: 'Image not found' });
    }
    res.json(image);
  });
};

exports.updateImage = (req, res) => {
  Image.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, image) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to update image' });
    }
    res.json({ message: 'Image updated successfully', image });
  });
};

exports.deleteImage = (req, res) => {
  Image.findByIdAndRemove(req.params.id, (err, image) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to delete image' });
    }
    res.json({ message: 'Image deleted successfully', image });
  });
};

exports.getAllImages = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to retrieve images' });
    }
    res.json(images);
  });
};
