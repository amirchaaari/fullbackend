const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFromSchema = new Schema({
  store_id: {
    type: String
  },
  store_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
  }
});

const OrderFrom = mongoose.model('OrderFrom', orderFromSchema);

module.exports = OrderFrom;
