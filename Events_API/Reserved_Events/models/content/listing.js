const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  content_id: { type: String, required: true, unique: true },
  session_id: { type: String },
  status: { type: String, 
    enum: ['draft', 'pending', 'active',
     'paused', 'deleted_by_user', 'deleted_by_company'] },
  ip: { type: String },
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
},
app: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
},
  listing: {
    subject: { type: String},
    body: { type: String },
    contact_email: { type: String },
    contact_address: 
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
   
    locations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        },
    ],
    listed_items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
    ],
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        },
    ],
    expiration_time: { type: Number },

  },
  brand_name: { type: String },
  site_country: { type: String },
  site_domain: { type: String },
  keyless_user_id: { type: String }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing