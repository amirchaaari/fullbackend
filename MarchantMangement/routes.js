const express = require('express');
const app = express();


const marchantRoute = require('./routes/routes')
app.use('/marchantAPI',marchantRoute);
module.exports = app;