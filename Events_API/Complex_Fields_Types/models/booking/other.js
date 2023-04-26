const mongoose = require('mongoose')

const OtherSchema = new mongoose.Schema({

 
      title: {
        type: String,
        required: true
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
      roomType: {
        type: String,
        required: true
      },
      event_id: {
        type: String
      },
      venue_id: {
        type: String
      },
      location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
      },
      category: {
        type: String
      },
    
      tags: {
        type: [String],
        required: false
      }
    })

const Other = mongoose.model('OtherBooking', OtherSchema);
module.exports = Other ;