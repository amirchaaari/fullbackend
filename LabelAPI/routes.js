const express = require('express');
const app = express();


const labelRoute = require('./routes/routes')
app.use('/label',labelRoute);
module.exports = app;