
const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
    user_id: { 
      type: String, 
      required: true 
    },
    session_id: { 
      type: String, 
      required: true 
    },
    status: { 
      type: String, 
      enum: ['pending', 'success', 'failure'], 
      required: true 
    },
    browser:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Browser'
    },
      app:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App'
    },
    verified_event: { 
      type: String 
    },
    verified_entity_id: { 
      type: String 
    },
    verification_type: { 
      type: String, 
      enum: ['sms', 'phone_call', 'email', 'app_tfa', 'captcha', 'shared_knowledge', 'face', 'fingerprint', 'push', 'security_key'] 
    },
    verified_value: { 
      type: String 
    },
    reason: { 
      type: String, 
      enum: ['user_setting', 'manual_review', 'automated_rule'] 
    },
    brand_name: { 
      type: String 
    },
    site_country: { 
      type: String 
    },
    site_domain: { 
      type: String 
    },
    keyless_user_id: { 
      type: String 
}
  })
  const Verification = mongoose.model('Verification', verificationSchema);

module.exports = Verification;
