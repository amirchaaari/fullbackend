const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  user_id: { type: String, required: true },
  external_entity_id: { type: String },
  type: { type: String, enum: ['user', 'order', 'session', 'content'], required: true },
  decision: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, enum: ['accept', 'watch', 'block'], required: true },
  },
  workflow: {
    run_id: { type: String },
    config: {
      id: { type: String },
      name: { type: String },
      version: { type: String },
    },
    route: {
      id: { type: String },
      name: { type: String },
    },
  },
  manual_review_queue: {
    name: { type: String },
  },
  source: {
    applied_from_type: { type: String, enum: ['console', 'api', 'workflow', 'review queue'], required: true },
  },
  event: {
    order_id: { type: String },
    transaction_id: { type: String },
    session_id: { type: String },
    content_id: { type: String },
    analyst_email: { type: String },
    time: { type: Number },
  },
});

const WebHook = mongoose.model('WebHook', entitySchema);

module.exports = WebHook;
