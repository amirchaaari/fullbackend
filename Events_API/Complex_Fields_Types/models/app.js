const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  os: {
     type: String,
      required: true 
    },
  os_version: {
     type: String,
      required: true 
    },
  device_manufacturer: {
     type: String,
      required: true 
    },
  device_model: {
     type: String,
      required: true 
    },
  device_unique_id: {
     type: String,
      required: true 
    },
  app_name: {
     type: String, 
     required: true 
    },
  app_version: {
     type: String, 
     required: true 
    },
  client_language: { 
    type: String, 
    required: true
   }
});

const App = mongoose.model('App_client', appSchema);

module.exports = App;
