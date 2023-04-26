const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
      },
    content_id: {
    type: String,
    required: true,
  },
  session_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'active',
     'paused', 'deleted_by_user', 'deleted_by_company'],
  },
  ip: {
    type: String,
  },
  browser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
},
app: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
},
  message: {
    subject: {
      type: String,
 },
    body: {
      type: String,

    },
    contact_email: {
      type: String,

    },
    root_content_id: {
      type: String,

    },
    recipient_user_ids: 
      [
        {type: String}
    ]

    ,
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        },
    ]
    
    ,
  },
  brand_name: {
    type: String,
  },
  site_country: {
    type: String,
  },
  site_domain: {
    type: String,
  },
  keyless_user_id: {
    type: String,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
