const mongoose = require('mongoose');

const bookingAccommodationSchema = new mongoose.Schema({

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
  guests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest'
  }],
  room_type: {
    type: String,
    required: true
  },
  venue_id: {
    type: String,
    required: true
  },
  location:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
},
  tags: {
    type: [String],
    required: false
  }
});

const bookingAccommodation = mongoose.model('AccommodationBooking', bookingAccommodationSchema);

module.exports = bookingAccommodation;
