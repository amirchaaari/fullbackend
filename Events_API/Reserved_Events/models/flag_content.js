const mongoose = require('mongoose');

const flagContentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  content_id: {
    type: String,
    required: true
  },
  flagged_by: {
    type: String
  },
  reason: {
    type: String,
    enum: ['toxic', 'irrelevant', 'commercial', 'phishing', 'private', 'scam', 'copyright', 'other']
  },
  user_email: {
    type: String
  },
  verification_phone_number: {
    type: String
  },
  keyless_user_id: {
    type: String
  }
});

const FlagContent = mongoose.model('FlagContent', flagContentSchema);

module.exports = FlagContent;
