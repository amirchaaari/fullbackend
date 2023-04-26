const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true
  },
  error_message: {
    type: String,
    required: true
  },
  request: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  score_response: {
    type: {
      scores: {
        type: Map,
        of: {
          score: {
            type: Number,
            required: true
          },
          reasons: {
            type: [String],
            required: true
          },
          name: {
            type: String,
            required: true
          },
          value: {
            type: String,
            required: true
          },
          details: {
            type: Object
          }
        },
        required: true
      },
      user_id: {
        type: String,
        required: true
      },
      latest_labels: {
        type: Map,
        of: {
          is_fraud: {
            type: Boolean,
            required: true
          },
          time: {
            type: Number,
            required: true
          },
          description: {
            type: String,
            required: true
          }
        }
      }
    },
    required: true
  }
});

module.exports = mongoose.model('Score', ScoreSchema);
