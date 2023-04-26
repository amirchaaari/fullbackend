const mongoose = require('mongoose');

const queryParametersSchema = new mongoose.Schema({
  entity_type: {
    type: String,
    enum: ['USER', 'ORDER', 'SESSION', 'CONTENT']
  },
  abuse_types: [{
    type: String,
    enum: ['LEGACY', 'PAYMENT_ABUSE', 'ACCOUNT_ABUSE', 'CONTENT_ABUSE', 'PROMO_ABUSE', 'ACCOUNT_TAKEOVER']
  }],
  limit: {
    type: Number,
    default: 100
  },
  from: {
    type: Number,
    default: 0
  }
});

const QueryParameters = mongoose.model('QueryParameters', queryParametersSchema);

module.exports = QueryParameters;
