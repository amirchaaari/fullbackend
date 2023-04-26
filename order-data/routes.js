const express = require('express');
const app = express();


const order = require('./route/order');
app.use('/order',order);
module.exports=app;
