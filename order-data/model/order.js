const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  Unnamed: {
    type: Number,
    required: false
  },
  trans_date_trans_time: {
    type: Date,
    required: false
  },
  cc_num: {
    type: Number,
    required: false
  },
  merchant: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  amt: {
    type: Number,
    required: false
  },
  first: {
    type: String,
    required: false
  },
  last: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false,
    enum: ['M', 'F']
  },
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zip: {
    type: Number,
    required: false
  },
  lat: {
    type: Number,
    required: false
  },
  long: {
    type: Number,
    required: false
  },
  city_pop: {
    type: Number,
    required: false
  },
  job: {
    type: String,
    required: false
  },
  dob: {
    type: Date,
    required: false
  },
  trans_num: {
    type: String,
    required: false
  },
  unix_time: {
    type: Number,
    required: false
  },
  merch_lat: {
    type: Number,
    required: false
  },
  merch_long: {
    type: Number,
    required: false
  },
  is_fraud: {
    type: Number,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  user_id: {
    type: String,
    required: false
  },
  session_id: {
    type: String,
    required: false
  },
  user_email: {
    type: String,
    required: false
  },
  ip: {
    type: String,
    required: false
  },
  social_sign_on_type: {
    type: String,
    enum: [
      'microsoft',
      'facebook',
      'google',
      'linkedin',
      'twitter',
      'yahoo',
      'amazon'
    ]
  },
  payment_type: {
    type: String,
    required: false
  },
  payment_gateway: {
    type: String,
    required: false
  },
  card_bin: {
    type: String,
    required: false
  },
  card_last4: {
    type: String,
    required: false
  },
  avs_result_code: {
    type: String,
    required: false
  },
  cvv_result_code: {
    type: String,
    required: false
  },
  verification_status: {
    type: String,
    required: false
  },
  stripe_address_line1_check: {
    type: String,
    required: false
  },
  stripe_address_line2_check: {
    type: String,
    required: false
  },
  stripe_address_zip_check: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  street_billing: {
    type: String,
    required: false
  },
  city_billing: {
    type: String,
    required: false
  },
  state_billing: {
    type: String,
    required: false
  },
  zip_billing: {
    type: Number,
    required: false
  },
  lat_billing: {
    type: Number,
    required: false
  },
  long_billing: {
    type: Number,
    required: false
  },
  city_pop_billing: {
    type: Number,
    required: false
  },
  account_type: {
    type: String,
    required: false
  },
  user_agent: String,
  content_language: String,
  accept_language: String,
  os: String,
  os_version: String,
  device_manufacturer: String,
  device_model: String,
  device_unique_id: String,
  app_name: String,
  app_version: String,
  client_language: String,
  currency_code: {
    type: String,
    required: false
  },
  order_id: {
    type: String,
    required: false
  },
  order_status: {
    type: String,
    required: false
  },
  transaction_type: {
    type: String,
    required: false
  },
  transaction_status: {
    type: String,
    required: false
  },
  transaction_id: {
    type: String,
    required: false
  },
  brand_name: {
    type: String,
    required: false
  },
  site_country: {
    type: String,
    required: false
  },
  site_domain: {
    type: String,
    required: false
  }
})



const Order = mongoose.model('Order-data', OrderSchema);

module.exports = Order;