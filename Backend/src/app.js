const express = require('express');


const app = express();

app.use(express.json()); //to get the data from the req.body


module.exports = app;