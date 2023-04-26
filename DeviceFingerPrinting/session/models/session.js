const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: true
  },
  device: {
    id: {
      type: String,
      required: true
    },
    first_seen: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      enum: ['fraud', 'not_fraud'],
      default: undefined
    }
  },
  users: {
    data: [{
      id: {
        type: String,
        required: true
      }
    }],
    has_more: {
      type: Boolean,
      required: true
    },
    next_ref: {
      type: String,
      required: false
    },
    total_results: {
      type: Number,
      required: false
    }
  },
  sessions: {
    data: [{
      time: {
        type: Number,
        required: true
      }
    }],
    has_more: {
      type: Boolean,
      required: true
    },
    next_ref: {
      type: String,
      required: false
    },
    total_results: {
      type: Number,
      required: false
    }
  },
  network: {
    first_seen: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    pervasiveness: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: undefined
    }
  }
});

module.exports = mongoose.model('Session', SessionSchema);
