const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  category: {
    type: String,
    enum: ['accept', 'watch', 'block']
  }
});

const latestDecisionSchema = new mongoose.Schema({
  decision: { type: decisionSchema },
  time: { type: Number },
  webhook_succeeded: { type: Boolean, default: null }
});

const decisionsSchema = new mongoose.Schema({
  payment_abuse: { type: latestDecisionSchema },
  promo_abuse: { type: latestDecisionSchema },
  content_abuse: { type: latestDecisionSchema },
  account_abuse: { type: latestDecisionSchema },
  legacy: { type: latestDecisionSchema },
  account_takeover: { type: latestDecisionSchema }
});

const responseFieldsSchema = new mongoose.Schema({
  decisions: { type: decisionsSchema }
});

const ResponseFields = mongoose.model('ResponseFields', responseFieldsSchema);

module.exports = ResponseFields;
