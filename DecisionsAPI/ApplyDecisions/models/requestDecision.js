const mongoose = require('mongoose');

const requestDecisionSchema = new mongoose.Schema({
  requestDecision_id: {
    type: String,
    required: true,
    unique: true
  },
  source: {
    type: String,
    enum: ["MANUAL_REVIEW", "AUTOMATED_RULE", "CHARGEBACK"],
    required: true
  },
  analyst: {
    type: String,

  },
  time: {
    type: Number,
  
  },
  description: {
    type: String
  }
});

const requestDecision = mongoose.model('requestDecision', requestDecisionSchema);

module.exports = requestDecision;
