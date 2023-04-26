const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentStatusSchema = new Schema({
  user_id: { type: String, required: true },
  content_id: { type: String, required: true },
  status: {
    type: String,
    enum: ['$draft', '$pending', '$active', '$paused', '$deleted_by_user', '$deleted_by_company'],
    required: true
  },
  browser:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
  },
  app:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
  },
  brand_name: { type: String },
  site_country: { type: String },
  site_domain: { type: String },
  user_email: { type: String },
  verification_phone_number: { type: String },
  keyless_user_id: { type: String }
});

module.exports = mongoose.model('ContentStatus', contentStatusSchema);
