const Address = require('../models/address');

exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (address == null) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAddress = async (req, res) => {
  const address = new Address({
    name: req.body.name,
    address_1: req.body.address_1,
    address_2: req.body.address_2,
    city: req.body.city,
    region: req.body.region,
    country: req.body.country,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  });

  try {
    const newAddress = await address.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (address == null) {
      return res.status(404).json({ message: 'Address not found' });
    }
    address.name = req.body.name;
    address.address_1 = req.body.address_1;
    address.address_2 = req.body.address_2;
    address.city = req.body.city;
    address.region = req.body.region;
    address.country = req.body.country;
    address.zipcode = req.body.zipcode;
    address.phone = req.body.phone;
    const updatedAddress = await address.save();
    res.status(200).json(updatedAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (address == null) {
      return res.status(404).json({ message: 'Address not found' });
    }
    await address.remove();
    res.status(204).json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
