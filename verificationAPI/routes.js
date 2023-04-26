const express = require('express');
const app = express();

const requestCheck = require('./check/routes/request')
const responceCheck = require('./check/routes/responce')

const requestResend = require('./resend/routes/request')
const responceResend = require('./resend/routes/responce')

const requestSend = require('./send/routes/request')
const responceSend = require('./send/routes/responce')


app.use('/check/request',requestCheck);
app.use('/check/responce',responceCheck);


app.use('/resend/request',requestResend);
app.use('/resend/responce',responceResend);


app.use('/send/request',requestSend);
app.use('/send/responce',responceSend);


module.exports = app;