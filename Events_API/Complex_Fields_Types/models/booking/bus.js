const mongoose = require('mongoose');

const BusBookingSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency_code: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  guests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest',
},
  segments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Segment',
},
  tags: {
    type: [String],
    required: false
  },

});

const BusBooking = mongoose.model('BusBooking', BusBookingSchema);

module.exports = BusBooking;
