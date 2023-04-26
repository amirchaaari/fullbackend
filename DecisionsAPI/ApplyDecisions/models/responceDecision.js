
const mongoose = require('mongoose');

const DecisionResponseSchema = new mongoose.Schema({
    entity: {
        id: {type : String},
        type: {type : String},
      },
      decision: {type: String },
        id: {type : String},
      
      time: {type:Number},

});

const reponceDecision = mongoose.model('reponceDecision', DecisionResponseSchema);

  module.exports = reponceDecision;