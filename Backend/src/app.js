const express = require('express');
const productRoute = require('./routes/product.route');
const cors = require('cors');



const app = express();

app.use(express.json()); //to get the data from the req.body
app.use(cors());

app.use('/api/products',productRoute);
// app.get('/api/products/get-item',productRoute.getItem);


module.exports = app;