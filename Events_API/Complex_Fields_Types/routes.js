const express = require('express');
const app = express();

//Complex_Fiels_Types
//
const addressRouter = require('./routes/address');
const appRouter = require('./routes/app');
const browserRouter = require('./routes/browser');
const creditPointRouter = require('./routes/creditPoint');
const DigitalOrderRouter = require('./routes/digitalOrder');
const discountRouter = require('./routes/discount');
const guestRouter = require('./routes/guest');
const imageRouter = require('./routes/image');
const itemRouter = require('./routes/item');
const merchantProfilRouter = require('./routes/merchantProfil');
const orderFromRouter = require('./routes/orderFrom');
const paymentMethodRouter = require('./routes/paymentMethod');
const promotionRouter = require('./routes/promotion');
const segmentRouter = require('./routes/segment');

//Booking Routes
const accommodationRouter = require('./routes/booking/accommodation')
const busRouter = require('./routes/booking/bus')
const cruiseRouter = require('./routes/booking/cruise')
const eventTicketRouter =require('./routes/booking/eventTicket')
const flightRouter =require('./routes/booking/flight')
const otherRouter =require('./routes/booking/other')
const rideshareRouter =require('./routes/booking/rideshare')
const vehicleRouter =require('./routes/booking/vehicle')



// Set up routes
app.use('/address',addressRouter);
app.use('/app',appRouter);
app.use('/browser',browserRouter);
app.use('/creditpoint',creditPointRouter);
app.use('/digitalorder',DigitalOrderRouter);
app.use('/discount',discountRouter);
app.use('/guest',guestRouter);
app.use('/image',imageRouter);
app.use('/item',itemRouter);
app.use('/merchantprofil',merchantProfilRouter);
app.use('/orderfrom',orderFromRouter);
app.use('/paymentmethod',paymentMethodRouter);
app.use('/promotion',promotionRouter);
app.use('/segment',segmentRouter);
//Booking Routes
app.use('/accommodation',accommodationRouter);
app.use('/bus',busRouter);
app.use('/cruise',cruiseRouter);
app.use('/eventticket',eventTicketRouter);
app.use('/flight',flightRouter);
app.use('/other',otherRouter);
app.use('/rideshare',rideshareRouter);
app.use('/vehicle',vehicleRouter);



module.exports = app;
