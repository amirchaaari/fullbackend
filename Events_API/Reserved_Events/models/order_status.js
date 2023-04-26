const mongoose = require('mongoose');

const orderStatusSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  order_id: {
    type: String,
    required: true
  },
  order_status: {
    type: String,
    enum: ['$approved', '$canceled', '$held', '$fulfilled', '$returned'],
    required: true
  },
  reason: {
    type: String,
    enum: ['$payment_risk', '$abuse', '$policy', '$other']
  },
  source: {
    type: String,
    enum: ['$automated', '$manual_review']
  },
  analyst: {
    type: String
  },
  webhook_id: {
    type: String
  },
  description: {
    type: String
  },
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref :'Browser'
  },
  app:  {
    type: mongoose.Schema.Types.ObjectId,
    ref :'App'
  },
  brand_name: {
    type: String
  },
  site_country: {
    type: String,
  },
  site_domain: {
    type: String
  },
  keyless_user_id: {
    type: String
  }
});

const OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);

module.exports = OrderStatus;
