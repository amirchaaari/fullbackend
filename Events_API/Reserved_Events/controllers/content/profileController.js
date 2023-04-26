const Profil  = require('../../models/content/profile');

exports.getAllprofils = async (req, res) => {
  try {
    const profils = await Profil.find().populate('browser app profile.contact_address profile.images');
    res.status(200).json(profils);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createprofil  = async (req, res) => {
  const profil  = new Profil (req.body);
  try {
    const newprofil  = await profil.save();
    res.status(201).json(newprofil );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getprofilById = async (req, res) => {
  const { id } = req.params;
  try {
    const profil  = await Profil.findById(id).populate('browser app profile.contact_address profile.images');
    if (!profil ) {
      return res.status(404).json({ message: 'profil  not found' });
    }
    res.status(200).json(profil );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateprofil  = async (req, res) => {
  const { id } = req.params;
  try {
    const profil  = await Profil.findByIdAndUpdate(id, req.body, { new: true });
    if (!profil ) {
      return res.status(404).json({ message: 'profil  not found' });
    }
    res.status(200).json(profil );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteprofil  = async (req, res) => {
  const { id } = req.params;
  try {
    const profil  = await Profil.findByIdAndDelete(id);
    if (!profil ) {
      return res.status(404).json({ message: 'profil  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
