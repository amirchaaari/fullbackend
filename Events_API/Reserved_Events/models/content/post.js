const mongoose = require('mongoose');

// Define the post schema
const postSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  content_id: { type: String, required: true },
  session_id: { type: String  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'active', 
    'paused', 'deleted_by_user', 'deleted_by_company'],
    default: 'draft'
  },
  ip: { type: String },
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
},
app: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
},
  post: {
    subject: { type: String },
    body: { type: String },
    contact_email: { type: String },
    contact_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    locations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        },
    ],
    categories: [{ type: String }],
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
  keyless_user_id: { type: String },
});
const Post = mongoose.model('Post',postSchema);
module.exports = Post ;