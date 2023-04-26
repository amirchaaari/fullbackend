const mongoose = require('mongoose');

const segmentSchema = new mongoose.Schema({
    departure_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    arrival_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    start_time: {
        type: Number,
        required: true,
    },
    end_time: {
        type: Number,
        required: true,
    },
    vessel_number: {
        type: String,
    },
    departure_airport_code: {
        type: String,
    },
    arrival_airport_code: {
        type: String,
    },
    fare_class: {
        type: String,
    },
});

const Segment = mongoose.model('Segment', segmentSchema);

module.exports = Segment;