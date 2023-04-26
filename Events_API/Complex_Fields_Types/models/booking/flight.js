
const mongoose = require('mongoose');

const flightBookingSchema = new mongoose.Schema({
  
    title: {
      type: String
    },
    start_time: {
      type: Number,
      required: true
    },
    end_time: {
      type: Number,
      required: true
    },
    price: {
      type: String,
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
    segments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Segment'
    }],
    tags: {
      type: [String]
    }
  });
  
  const FlightBooking = mongoose.model('FlightBooking', flightBookingSchema);
  
  module.exports = FlightBooking;
  