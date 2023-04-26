const mongoose = require('mongoose');

const LabelSchema = new mongoose.Schema({
  
    userId: {
      type: String,
      required: true
    },
    isFraud: {
      type: Boolean,
      required: true
    },
    abuseType: {
      type: String,
      enum: ['payment_abuse', 'content_abuse', 'promotion_abuse', 'account_abuse'],
      required: true
    },
    description: {
      type: String
    },
    source: {
      type: String
    },
    analyst: {
      type: String
    }
  
  
});

module.exports = mongoose.model('Label', LabelSchema);
