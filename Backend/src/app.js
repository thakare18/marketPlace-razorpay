const express = require('express');
const productRoute = require('./routes/product.route');
const cors = require('cors');
const paymentRoute = require('./routes/payment.routes');


const app = express();

app.use(express.json()); //to get the data from the req.body
app.use(cors());

app.use('/api/products',productRoute);
app.use('/api/payments', paymentRoute);
// app.get('/api/products/get-item',productRoute.getItem);


module.exports = app;