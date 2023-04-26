const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  session_id: {
    type: String,
  },
  login_status: {
    type: String,
    enum: ['success', 'failure'],
    required: true,
  },
  user_email: {
    type: String,
  },
  verification_phone_number: {
    type: String,
  },
  ip: {
    type: String,
  },
  browser:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Browser'
},
  app:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'App'
},
  failure_reason: {
    type: String,
    enum: [
      'account_unknown',
      'account_suspended',
      'account_disabled',
      'wrong_password',
    ],
  },
  username: {
    type: String,
  },
  social_sign_on_type: {
    type: String,
    enum: [
      '$facebook',
      '$google',
      '$linkedin',
      '$twitter',
      '$yahoo',
      '$microsoft',
      '$amazon',
      '$apple',
      '$github',
      '$other',
    ],
  },
  account_types: {
    type: [String],
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

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
