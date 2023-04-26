const express = require('express');
const app = express();

const requestDecisionRoute = require('./ApplyDecisions/routes/request')
const responceDecisionRoute= require('./ApplyDecisions/routes/responce')


const queryParametresRoute = require('./DecisionListe/route/queryParametres')
const responceDecisionListRoute= require('./DecisionListe/route/responceDecision')

const responceFieldRoute = require('./DesicionStatus/route/responceField')

const webhookRoute = require('./DecisionWebHooks/route/webhook')

app.use('/apply/request',requestDecisionRoute);
app.use('/apply/responce',responceDecisionRoute);

app.use('/liste/parametre',queryParametresRoute);
app.use('/liste/responce',responceDecisionListRoute);


app.use('/status/parametre',responceFieldRoute);
app.use('/webhooks/responce',webhookRoute);


module.exports = app;