const express = require('express');
const app = express();


const accountRoutes = require('./routes/account')
const chargebackRouter = require('./routes/chargeback')
const addPromotionRouter = require('./routes/addPromotion')
const contentStatusRoutes = require('./routes/contentStatus')
const flagContentRoutes = require('./routes/flagContent')
const itemToCartRoutes = require('./routes/itemToCart')
const linkSessionToUserRoutes = require('./routes/linkSessionToUser')
const loginRoutes = require('./routes/login')
const logoutRoutes = require('./routes/logout')
const orderRoutes = require('./routes/order')
const orderStatusRoutes = require('./routes/orderStatus')
const securityNotificationRoutes = require('./routes/securityNotification')
const transactionRoutes = require('./routes/transaction')
const verificationRoutes = require('./routes/verification')
//CONTENT
const commentRoutes = require('./routes/content/comment')
const listingRoutes = require('./routes/content/listing')
const messageRoutes = require('./routes/content/message')
const postRoutes = require('./routes/content/post')
const profileRoutes = require('./routes/content/profile')
const reviewRoutes = require('./routes/content/review')


app.use('/account',accountRoutes);
app.use('/addpromotion',addPromotionRouter);
app.use('/chargeback',chargebackRouter);
app.use('/contentstatus',contentStatusRoutes);
app.use('/flagcontent',flagContentRoutes);
app.use('/itemtocart',itemToCartRoutes);
app.use('/linksessiontouser',linkSessionToUserRoutes);
app.use('/login',loginRoutes);
app.use('/logout',logoutRoutes);
app.use('/order',orderRoutes);
app.use('/orderstatus',orderStatusRoutes)
app.use('/securitynotification',securityNotificationRoutes)
app.use('/transaction',transactionRoutes)
app.use('/verification',verificationRoutes)
app.use('/comment',commentRoutes)
app.use('/listing',listingRoutes)
app.use('/message',messageRoutes)
app.use('/post',postRoutes)
app.use('/profil',profileRoutes)
app.use('/review',reviewRoutes)


module.exports = app;