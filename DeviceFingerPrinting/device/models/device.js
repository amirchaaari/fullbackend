const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    
        id: { type: String, required: true },
        first_seen: { type: Number, required: true },
        users: {
          data: [
            {
              id: { type: String, required: true },
              has_more: { type: Boolean },
              next_ref: { type: String },
              total_results: { type: Number }
            }
          ]
        },
        sessions: {
          data: [
            {
              time: { type: Number, required: true },
              has_more: { type: Boolean },
              next_ref: { type: String },
              total_results: { type: Number }
            }
          ]
        },
        label: { type: String, enum: ['fraud', 'not_fraud'], default: undefined },
        labeled_at: { type: Number, default: null },
        network: {
          first_seen: { type: Number, required: true },
          score: { type: Number, min: 0, max: 1, required: true },
          pervasiveness: { type: String, enum: ['low', 'medium', 'high'], default: undefined }
        }
      
      
});

const device = mongoose.model('Device', deviceSchema);

module.exports = device;
