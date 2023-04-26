const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    min: 0.0,
    max: 1.0
  },
  time: {
    type: Number,
    required: true
  },
  reasons: [{
    name: String,
    value: String
  }],
  details: {
    type: mongoose.Schema.Types.Mixed
  }
});

const decisionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['BLOCK', 'WATCH', 'ACCEPT'],
    required: true
  },
  source: {
    type: String,
    enum: ['AUTOMATED_RULE', 'MANUAL_REVIEW', 'CHARGEBACK'],
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  description: String
});

const labelSchema = new mongoose.Schema({
  is_fraud: {
    type: Boolean,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  description: String
});

const responseSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true
  },
  error_message: String,
  scores: {
    type: Map,
    of: scoreSchema,
    required: true
  },
  entity_type: {
    type: String,
    default: 'user'
  },
  entity_id: {
    type: String,
    required: true
  },
  latest_decisions: {
    type: Map,
    of: decisionSchema
  },
  latest_labels: {
    type: Map,
    of: labelSchema
  }
}, { timestamps: { createdAt: 'time' } });

module.exports = mongoose.model('rescores', responseSchema);
