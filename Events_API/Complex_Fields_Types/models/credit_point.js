const mongoose = require('mongoose');

const creditPointSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  credit_point_type: {
    type: String,
    required: true
  }
});

const CreditPoint = mongoose.model('CreditPoint', creditPointSchema);

module.exports = CreditPoint;
