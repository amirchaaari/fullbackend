const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({

 
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
    
      tags: {
        type: [String],
        required: false
      }
    })

const Vehicle = mongoose.model('VehicleBooking', VehicleSchema);
module.exports = Vehicle ;