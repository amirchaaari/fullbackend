const mongoose = require('mongoose');

const browserSchema = new mongoose.Schema({
  user_agent: {
     type: String,
      required: true 
    },
  content_language: { 
    type: String,
     required: true 
    },
  accept_language: { 
    type: String,
     required: true 
    }
});

const Browser = mongoose.model('Browser', browserSchema);

module.exports = Browser;
