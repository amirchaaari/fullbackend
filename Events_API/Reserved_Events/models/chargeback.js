const mongoose = require('mongoose');

const chargebackSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true
  },
  transaction_id: {
    type: String,
    required:true
  },
  user_id: String,
  chargeback_state: {
    type: String,
    enum: [
      "received",
      "accepted",
      "disputed",
      "won",
      "lost"
    ],
    required: true
  },
  chargeback_reason: {
    type: String,
    enum: [
      "fraud",
      "duplicate",
      "product_not_received",
      "product_unacceptable",
      "other",
      "authorization",
      "consumer_disputes",
      "processing_errors",
      "cancel_subscription",
      "friendly_fraud",
      "ach_return",
      "ach_reversal"
    ],
    required: true
  },
  merchant_profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MerchantProfile'
  },
  keyless_user_id: String,
  ach_return_code: String
});

const Chargeback = mongoose.model('Chargeback', chargebackSchema);

module.exports = Chargeback;
