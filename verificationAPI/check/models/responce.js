const mongoose = require('mongoose');

const responceCheckSchema = new mongoose.Schema({
  status: {
    type: Number,
  },
  error_message: {
    type: String,
  },
  checked_at: {
    type: Number,
  },
});

const responceCheck = mongoose.model('responceCheck', responceCheckSchema);

module.exports = responceCheck;