const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    account_id: String,
    event: String,
    created: Number,
    updated_at: Number,
    order_id: String,
    user_id: String,
    user_email: String,
    ip: String,
    order_status: String,
    amount: Number,
    currency_code: String,
    payment_methods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PaymentMethod'
        }
    ],
    ordered_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderFrom'
    },
    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    expedited_shipping: Boolean,
    shipping_method: String,
    shipping_carrier: String,
    shipping_tracking_number: String,
    shipping_tracking_numbers: [String],
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccommodationBooking' || 'BusBooking' || 'CruiseBooking' || 'EventTicketBooking' || 'FlightBooking' || 'OtherBooking' || 'RideshareBooking' || 'VehicleBooking'
    }],
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    chargebacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chargeback'
    }],
    latest_decisions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reponceDecision'
    }],
    scores: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'getScores'
    }
});

const Order = mongoose.model('ORDER', OrderSchema);

module.exports = Order;
