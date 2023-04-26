const mongoose = require('mongoose');

const AddPromotionSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true
  },
  user_id: {
    type:String,
    required:true
  },
  promotions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Promotion'
  }],

  
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
  },
  app: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
  },
  brand_name: String,
  site_country: {
    type: String,
    required: true
  },
  site_domain: {
    type: String,
    required: true
  },
  user_email: String,
  verification_phone_number: String,
  keyless_user_id: String
});

const AddPromotion = mongoose.model('AddPromotion', AddPromotionSchema);

module.exports = AddPromotion;