const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_id: {
    type: String,
    required: true
  },
  product_title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency_code: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  upc: String,
  sku: String,
  isbn: String,
  brand: String,
  manufacturer: String,
  category: String,
  tags: [String],
  color: String,
  size: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
