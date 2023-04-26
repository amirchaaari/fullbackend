const mongoose = require('mongoose');

const responceDesicionListSchema = new mongoose.Schema({
  data:{
    id: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      entity_type: {
        type: String,
        enum: ['USER', 'ORDER', 'SESSION', 'CONTENT'],
      },
      abuse_type: {
        type: String,
        enum: ['LEGACY', 'PAYMENT_ABUSE', 'ACCOUNT_ABUSE', 'CONTENT_ABUSE', 'PROMO_ABUSE'],
      },
      category: {
        type: String,
        enum: ['ACCEPT', 'WATCH', 'BLOCK'],
      },
      webhook_url: {
        type: String,
        required: false,
      },
      created_at: {
        type: Number,
      },
      created_by: {
        type: String,
      },
      updated_at: {
        type: Number,
      },
      updated_by: {
        type: String,
      },
  }
  ,
  has_more: {
    type: Boolean,
  },
  next_ref: {
    type: String,
  },
  });
  

  
  const responceDesicionList = mongoose.model('responceDesicionList', responceDesicionListSchema);

  module.exports = responceDesicionList;
  