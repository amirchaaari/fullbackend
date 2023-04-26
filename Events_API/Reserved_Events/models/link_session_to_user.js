const mongoose = require('mongoose');

const linkSessionToUserSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  keyless_user_id: {
    type: String
  }
});

const LinkSessionToUser = mongoose.model('LinkSessionToUser', linkSessionToUserSchema);

module.exports = LinkSessionToUser;
