const mongoose = require('mongoose');

// Define the post schema
const profileSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  content_id: { type: String, required: true },
  session_id: { type: String },
  status: {
    type: String,
    enum: ['draft', 'pending', 'active', 
    'paused', 'deleted_by_user', 'deleted_by_company'],
    default: 'pending'
  },
  ip: { type: String },
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
},
app: {
    type: mongoose.Schema.Types.ObjectId,
    ref  : 'App'
},
  profile: {
    body: { type: String },
    contact_email: { type: String },
    contact_address:   {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    images: [  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },],
    categories: [{type: String}],
   
  },
  brand_name: { type: String },
  site_country: { type: String },
  site_domain: { type: String },
  keyless_user_id: { type: String },
});
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
