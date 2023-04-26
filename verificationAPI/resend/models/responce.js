const mongoose = require('mongoose');

const responceResendSchema = new mongoose.Schema({
  status: {
    type: Number,
  },
  error_message: {
    type: String,
  },
  send_at: {
    type: Number,
  },
});

const responceResend = mongoose.model('responceResend', responceResendSchema);

module.exports = responceResend;