const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchantProfileSchema = new Schema({
  merchant_id: {
    type: String,
    required: true
  },
  merchant_category_code: {
    type: String
  },
  merchant_name: {
    type: String,
    required: true
  },
  merchant_address: {
    type: String
  }
});

const MerchantProfile = mongoose.model('MerchantProfile', merchantProfileSchema);

module.exports = MerchantProfile;
