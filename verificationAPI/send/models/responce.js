const mongoose = require('mongoose');

const responceSendSchema = new mongoose.Schema({
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

const responceSend = mongoose.model('responceSend', responceSendSchema);

module.exports = responceSend;