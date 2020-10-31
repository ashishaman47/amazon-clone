const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HQzO7CPh4Pzkj5W99lUGPVFcHKOvCCd5STGwAeT8XpPszZew8UqHc0L18TxhEQM3ELYDzBAsY7vK5lxiekxvj2s00xYEgBo4u'
);

// API Setup

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json()); //send data or pass in json format

// - Api routes
app.get('/', (request, response) => response.status(200).send('Heeeloooo!!'));

app.post('/payments/create', async (request, response) => {
  //   getting total query from the url
  const total = request.query.total;

  console.log('Payment Request Recieved >>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: 'usd',
  });

  //   Ok - Created paymentIntent
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d3a1a/us-central1/api
