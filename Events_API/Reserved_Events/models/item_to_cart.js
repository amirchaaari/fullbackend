const mongoose = require('mongoose');

const itemToCartSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true
  },
  user_id: String,
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },

  
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
  },
  app: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
  },
  brand_name: String,
  site_country: {
    type: String,
    required: true
  },
  site_domain: {
    type: String,
    required: true
  },
  user_email: String,
  verification_phone_number: String,
  keyless_user_id: String
});

const ItemToCart = mongoose.model('ItemToCart', itemToCartSchema);

module.exports = ItemToCart;
