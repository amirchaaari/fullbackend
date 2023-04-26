const Item = require('../models/item');

exports.createItem = (req, res) => {
  const newItem = new Item(req.body);

  newItem.save((err, item) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to save item' });
    }
    res.json({ message: 'Item saved successfully', item });
  });
};

exports.getItemById = (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) {
      return res.status(400).json({ error: 'Item not found' });
    }
    res.json(item);
  });
};

exports.updateItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, item) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to update item' });
    }
    res.json({ message: 'Item updated successfully', item });
  });
};

exports.deleteItem = (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to delete item' });
    }
    res.json({ message: 'Item deleted successfully', item });
  });
};

exports.getAllItems = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({ error: 'Unable to retrieve items' });
    }
    res.json(items);
  });
};
