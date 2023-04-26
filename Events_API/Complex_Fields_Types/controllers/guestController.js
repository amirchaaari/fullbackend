const Guest = require('../models/guest');

// GET all guests
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new guest
exports.createGuest = async (req, res) => {
  try {
    const guest = new Guest({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      loyalty_program: req.body.loyalty_program,
      loyalty_program_id: req.body.loyalty_program_id,
      birth_date: req.body.birth_date
    });
    const newGuest = await guest.save();
    res.status(201).json(newGuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET a specific guest by id
exports.getGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (guest == null) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.json(guest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE a specific guest by id
exports.updateGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (guest == null) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    guest.name = req.body.name || guest.name;
    guest.email = req.body.email || guest.email;
    guest.phone = req.body.phone || guest.phone;
    guest.loyalty_program = req.body.loyalty_program || guest.loyalty_program;
    guest.loyalty_program_id = req.body.loyalty_program_id || guest.loyalty_program_id;
    guest.birth_date = req.body.birth_date || guest.birth_date;
    const updatedGuest = await guest.save();
    res.json(updatedGuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a specific guest by id
exports.deleteGuestById = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (guest ==null) {
        return res.status(404).json({ message: 'guest not found' });
      }
      await guest.remove();
      res.json({ message: 'guest deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
