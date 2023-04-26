const mongoose = require('mongoose');

const createMerchantSchema = new mongoose.Schema({
  accountId: {
    type: String,
    required: true
  },
  merchantId: {
    type: String,
    required: true,
    unique: true
  },
  merchantObject: {
    id: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      service_level: {
        type: String,
        required: true,
      },
      created_at: {
        type: Number,
      },
      created_by: {
        type: String,
      },
      last_updated_by: {
        type: String,
      },
      last_updated_at: {
        type: Number,
        default: () => Date.now(),
      },
      status: {
        type: String,
        enum: ['active', 'churned', 'inactive', 'paused', 'risk_profile'],
        required: true,
      },
      risk_profile: {
        type: {
          score: {
            type: Number,
            min: 0,
            max: 100,
          },
          level: {
            type: String,
            enum: ['low', 'medium', 'high'],
          },
        },
      },  }
});

module.exports = mongoose.model('CreateMerchant', createMerchantSchema);
