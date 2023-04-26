const MerchantProfile = require('../models/merchant_profil');

// Get all merchant profiles
exports.getAllMerchantProfiles = (req, res) => {
  MerchantProfile.find({}, (err, merchantProfiles) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(merchantProfiles);
    }
  });
};

// Create new merchant profile
exports.createMerchantProfile = (req, res) => {
  const newMerchantProfile = new MerchantProfile(req.body);
  newMerchantProfile.save((err, merchantProfile) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(merchantProfile);
    }
  });
};

// Get merchant profile by id
exports.getMerchantProfileById = (req, res) => {
  MerchantProfile.findById(req.params.id, (err, merchantProfile) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!merchantProfile) {
      res.status(404).json({ error: 'Merchant profile not found' });
    } else {
      res.status(200).json(merchantProfile);
    }
  });
};

// Update merchant profile by id
exports.updateMerchantProfileById = (req, res) => {
  MerchantProfile.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, merchantProfile) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!merchantProfile) {
      res.status(404).json({ error: 'Merchant profile not found' });
    } else {
      res.status(200).json(merchantProfile);
    }
  });
};

// Delete merchant profile by id
exports.deleteMerchantProfileById = (req, res) => {
  MerchantProfile.findByIdAndDelete(req.params.id, (err, merchantProfile) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!merchantProfile) {
      res.status(404).json({ error: 'Merchant profile not found' });
    } else {
      res.status(204).json();
    }
  });
};
