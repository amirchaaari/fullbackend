const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  loyalty_program: {
    type: String
  },
  loyalty_program_id: {
    type: String
  },
  birth_date: {
    type: String
  }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
