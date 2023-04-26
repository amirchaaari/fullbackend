const mongoose = require('mongoose');
const eventTicketSchema = new mongoose.Schema({
   
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
    event_id: {
      type: String,
      required: true
    },
    venue_id: {
      type: String,
      required: true
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address'
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: false
    }
  });
  

const EventTicketBooking = mongoose.model('EventTicketBooking', eventTicketSchema);

module.exports = EventTicketBooking;
