const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: {
      type: String,
      required: true
    },
    user_email: {
      type: String
    },
    verification_phone_number: {
      type: String
    },
    transaction_type: {
      type: String,
      enum: ['sale', 'authorize', 'capture', 'void', 'refund', 'deposit', 'withdrawal', 'transfer', 'buy', 'sell', 'send', 'receive'],
      default: 'sale'
    },
    transaction_status: {
      type: String,
      enum: ['success', 'failure', 'pending'],
      default: 'success'
    },

    amount: {
      type: Number,
      required: true
    },
    currency_code: {
      type: String,
      required: true
    },
    order_id: {
      type: String,
      required: false

    },
    transaction_id: {
      type: String,
      required: false

    },
    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    payment_method: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaymentMethod'
    },
    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    session_id: {
      type: String
    },
    seller_user_id: {
      type: String
    },
    transfer_recipient_user_id: {
      type: String
    },
    decline_category: {
      type: String,
      enum: ['fraud', 'lost_or_stolen', 'risky', 'bank_decline', 'invalid', 'expired', 'insufficient_funds', 'limit_exceeded', 'additional_verification_required', 'invalid_verification', 'other']
    },
    ordered_from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderFrom'
    },
    browser:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Browser'
    },
      app:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App'
    },
    brand_name: {
      type: String
    },
    site_country: {
      type: String
    },
    site_domain: {
      type: String
    },
    status_3ds: {
      type: String,
      enum: ['successful', 'attempted', 'failed', 'unavailable']
    }
  });
  const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

  