const EventTicketBooking = require('../../models/booking/event-ticket');

// Get all EventTicketBookings
exports.getEventTicketBookings = async (req, res) => {
  try {
    const eventTicketBookings = await EventTicketBooking.find().populate('guests').populate('location');
    res.json(eventTicketBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single EventTicketBooking by ID
exports.getEventTicketBookingById = async (req, res) => {
  try {
    const eventTicketBooking = await EventTicketBooking.findById(req.params.id).populate('guests').populate('location');
    if (!eventTicketBooking) {
      return res.status(404).json({ message: 'EventTicketBooking not found' });
    }
    res.json(eventTicketBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new EventTicketBooking
exports.createEventTicketBooking = async (req, res) => {
  const eventTicketBooking = new EventTicketBooking(req.body);
  try {
    const newEventTicketBooking = await eventTicketBooking.save();
    res.status(201).json(newEventTicketBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing EventTicketBooking
exports.updateEventTicketBooking = async (req, res) => {
  try {
    const eventTicketBooking = await EventTicketBooking.findById(req.params.id);
    if (!eventTicketBooking) {
      return res.status(404).json({ message: 'EventTicketBooking not found' });
    }
    eventTicketBooking.title = req.body.title ||  eventTicketBooking.title;
    eventTicketBooking.start_time = req.body.start_time ||  eventTicketBooking.start_time;
    eventTicketBooking.end_time = req.body.end_time ||  eventTicketBooking.end_time;
    eventTicketBooking.price = req.body.price ||  eventTicketBooking.price;
    eventTicketBooking.currency_code = req.body.currency_code ||  eventTicketBooking.currency_code;
    eventTicketBooking.quantity = req.body.quantity ||  eventTicketBooking.quantity;
    eventTicketBooking.guests = req.body.guests ||  eventTicketBooking.guests;
    eventTicketBooking.event_id = req.body.event_id ||  eventTicketBooking.event_id;
    eventTicketBooking.venue_id = req.body.venue_id ||  eventTicketBooking.venue_id;
    eventTicketBooking.location = req.body.location ||  eventTicketBooking.location;
    eventTicketBooking.category = req.body.category ||  eventTicketBooking.category;
    eventTicketBooking.tags = req.body.tags ||  eventTicketBooking.tags;

    const updatedEventTicketBooking = await eventTicketBooking.save();
    res.json(updatedEventTicketBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an EventTicketBooking
exports.deleteEventTicketBooking = async (req, res) => {
  try {
    const eventTicketBooking = await EventTicketBooking.findById(req.params.id);
    if (!eventTicketBooking) {
      return res.status(404).json({ message: 'EventTicketBooking not found' });
    }
    await eventTicketBooking.remove();
    res.json({ message: 'EventTicketBooking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
