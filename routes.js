const express = require('express');
const app = express();



const decisions = require('./DecisionsAPI/routes')
const fingerprinting = require('./DeviceFingerPrinting/routes')
const eventcomplex = require('./Events_API/Complex_Fields_Types/routes')
const eventreserved = require('./Events_API/Reserved_Events/routes')
const label = require('./LabelAPI/routes')
const order = require('./orderAPI/routes')
const score = require('./scoreAPI/routes')
const verification = require('./verificationAPI/routes')
const marchant = require('./MarchantMangement/routes')
const orderdata = require('./order-data/routes')

app.use('/decision', decisions)
app.use('/fingerprinting', fingerprinting)
app.use('/event/complex', eventcomplex)
app.use('/event/reserved', eventreserved)
app.use('/label', label)
app.use('/order', order)
app.use('/score', score)
app.use('/verification', verification)
app.use('/merchant', marchant)
app.use('/order-data', orderdata)
module.exports = app;