const express = require('express');
const app = express();


const orderRoute = require('./routes/routes')
app.use('/orderAPI',orderRoute);
module.exports = app;