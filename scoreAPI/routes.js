const express = require('express');
const app = express();


const getScoresRoute= require('./getscoreAPI/routes/score')
const reScoreRoute = require('./re_scoreAPI/routes/score')
const synchronousScoresRoutes = require('./synchronousScores/Oveview/routes/score')


app.use('/getscore',getScoresRoute);
app.use('/rescore',reScoreRoute)
app.use('/syscores',synchronousScoresRoutes)

module.exports = app;