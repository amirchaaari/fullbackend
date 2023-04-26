const mongoose = require('mongoose');

const securityNotificationSchema = new mongoose.Schema ({
    user_id: {
        type: String,
        required: true
      },
      session_id: {
        type: String,
        required: true
      },
      notification_type: {
        type: String,
        enum: ['email', 'sms', 'push']
      },
      notified_value: {
        type: String
      },
      notification_status: {
        type: String,
        enum: ['sent', 'safe', 'compromised'],
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
  const securityNotification = mongoose.model('securityNotification', securityNotificationSchema);

module.exports = securityNotification;
