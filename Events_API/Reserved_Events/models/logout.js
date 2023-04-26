const mongoose = require('mongoose');

const LogoutSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
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

const Logout = mongoose.model('Logout', LogoutSchema);

module.exports = Logout;
