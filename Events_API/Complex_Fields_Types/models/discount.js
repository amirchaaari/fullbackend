const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  percentage_off: {
    type: Number,
    min: 0,
    max: 1
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency_code: {
    type: String,
    required: true
  },
  minimum_purchase_amount: {
    type: Number,
    min: 0
  }
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
