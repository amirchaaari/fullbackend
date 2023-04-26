const express = require('express');
const app = express();


const deviceRoute = require('./device/routes/routes')
const sessionRoute = require('./session/routes/routes')
const userRoute = require('./users/routes/routes')

app.use('/device',deviceRoute);
app.use('/session',sessionRoute);
app.use('/user',userRoute);

module.exports = app;