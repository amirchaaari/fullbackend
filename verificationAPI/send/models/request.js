const mongoose = require('mongoose');

const requestSendSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  send_to: {
    type: String,
    required: true,
  },
  event: {
    session_id: {
      type: String,
      required: true
    }},
    verification_type: {
        type: String,
        required: true 
      },
      verified_entity_id: {
        type: String,
      },
   event :{
    verified_event: {
        type: String,
      },
   },
   brand_name: {
    type: String,
  },
  site_country: {
    type: String,
  },
   event :{
    app: {
        client_language: {
          type: String,
        },
      
      browser: {
        content_language: {
          type: String,
        },
      },
   },
    ip: {
      type: String,
    },
    reason: {
      type: String,
    },
  },



});

module.exports = mongoose.model('requestSend', requestSendSchema);
