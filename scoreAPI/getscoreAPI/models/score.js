const mongoose = require('mongoose');



const responseSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true
  },
  error_message: {type :String},
  scores: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Score'
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reponceDecision'
},
  latest_labels:   {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Label'
}
}, { timestamps: { createdAt: 'time' } });

const getScores = mongoose.model('getScores', responseSchema);
module.exports = getScores