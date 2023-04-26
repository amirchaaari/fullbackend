const Order  = require('../model/order')
const { PythonShell } = require('python-shell');

// Specify the path to your serialized model file
// const modelFilePath = 'LogisticRegression2.pkl';

// // // Set the options for running Python
// const options = {
//   pythonPath: 'C:/Python27/python.exe', // Path to Python 3 executable
//   args: [modelFilePath] // Pass the model file path as an argument to the Python script
// };

// Run the Python script that loads the model
PythonShell.run('D:/fraud-app/full back end/order-data/controller/load_model.py', null, function (err, results) {
  if (err) throw err;

  // The loaded model is available in the results array
  const model = results[0];
  console.log(model);
});

exports.getAllOrders = async (req, res) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createOrder  = async (req, res) => {
  const order  = new Order (req.body);
  try {
    const newOrder  = await order.save();
    res.status(201).json(newOrder );
  
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findById(id);
    if (!order ) {
      return res.status(404).json({ message: 'Order  not found' });
    }
    res.status(200).json(order );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrder  = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!order ) {
      return res.status(404).json({ message: 'Order  not found' });
    }
    res.status(200).json(order );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOrder  = async (req, res) => {
  const { id } = req.params;
  try {
    const order  = await Order.findByIdAndDelete(id);
    if (!order ) {
      return res.status(404).json({ message: 'Order  not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
