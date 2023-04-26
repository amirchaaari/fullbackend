const Listing  = require('../../models/content/listing');

exports.getAlllistings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('browser app listing.contact_address listing.locations listing.listed_items listing.images');
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createlisting  = async (req, res) => {
  const listing  = new Listing (req.body);
  try {
    const newlisting  = await listing.save();
    res.status(201).json(newlisting );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getlistingById = async (req, res) => {
  const { id } = req.params;
  try {
    const listing  = await Listing.findById(id).populate('browser app contact_address locations listed_items images');
    if (!listing ) {
      return res.status(404).json({ message: 'listing  not found' });
    }
    res.status(200).json(listing );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatelisting  = async (req, res) => {
  const { id } = req.params;
  try {
    const listing  = await Listing.findByIdAndUpdate(id, req.body, { new: true });
    if (!listing ) {
      return res.status(404).json({ message: 'listing  not found' });
    }
    res.status(200).json(listing );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletelisting  = async (req, res) => {
  const { id } = req.params;
  try {
    const listing  = await Listing.findByIdAndDelete(id);
    if (!listing ) {
      return res.status(404).json({ message: 'listing  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
