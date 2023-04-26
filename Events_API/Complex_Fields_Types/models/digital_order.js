const mongoose = require('mongoose');

const digitalOrderSchema = new mongoose.Schema({
  digital_asset: {
    type: String,
    required: true
  },
  pair: {
    type: String
  },
  asset_type: {
    type: String,
    enum: ['coin', 'commodity', 'crypto', 'fiat', 'token']
  },
  order_type: {
    type: String,
    enum: ['limit', 'market', 'stop_limit', 'stop_loss', 'take_profit', 'take_profit_limit']
  },
  volume: {
    type: String
  }
});

const DigitalOrder = mongoose.model('DigitalOrder', digitalOrderSchema);

module.exports = DigitalOrder;
