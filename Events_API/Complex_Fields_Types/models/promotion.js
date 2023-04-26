const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  promotion_id: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['$success', '$failure'],
    default: '$success',
  },
  failure_reason: {
    type: String,
    enum: ['$already_used', '$invalid_code', '$not_applicable', '$expired'],
  },
  description: {
    type: String,
  },
  referrer_user_id: {
    type: String,
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount'
  },
  credit_point: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreditPoint'
  },
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion  ;
