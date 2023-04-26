const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  md5_hash: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
