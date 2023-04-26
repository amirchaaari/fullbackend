const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    schema: {
      type: String, // REQUIRED · String - Reference to the json schema that the data in the array conforms to
      required: true
    },
    data: {
      type: Array, // REQUIRED · Array - A list of data items
      required: true
    },
    id: {
      type: String, // REQUIRED · String - id of the referenced resource
      required: true
    },
    has_more: {
      type: Boolean, // Boolean - Whether there are more results
    },
    next_ref: {
      type: String, // String - A link to the next set of data, if available
    },
    total_results: {
      type: Number, // Integer - The total number of results, if known
    }
  }
  )
  module.exports = mongoose.model('User_device', UserSchema);
