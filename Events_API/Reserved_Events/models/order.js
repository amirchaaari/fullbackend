const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    session_id: {
        type: String,
    },
    order_id: {
        type: String,
    },
    user_email: {
        type: String,
    },
    verification_phone_number: String,
    amount: {
        type: Number,
        required: true
    },
    currency_code: {
        type: String,
        required: true
    },
    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    payment_methods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentMethod'
    }],
    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    expedited_shipping: {
        type: Boolean
    },
    items:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
        ],
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AccommodationBooking' || 'BusBooking' || 'CruiseBooking' || 'EventTicketBooking' || 'FlightBooking' || 'OtherBooking' || 'RideshareBooking' || 'VehicleBooking'
        },
    ],
    seller_user_id: { type: String },
    promotions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Promotion'
        },
    ],
    shipping_method: {
        type: String,
        enum: ["electronic", "physical"]
    },
    shipping_carrier: {
        type: String,
    },
    shipping_tracking_number: {
        type: String,
    },
    shipping_tracking_numbers: [{
        type: String,
    },],
    ordered_from:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderFrom'
    },
    browser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Browser'
    },
    app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App'
    },
    brand_name: {
        type: String,
    },
    site_country: {
        type: String,
    },
    site_domain: {
        type: String,
    },
    merchant_profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MerchantProfile'
    },
    keyless_user_id: {
        type: String
    },
    digital_orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DigitalOrder'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
