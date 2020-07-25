const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const routetime = require('./routes/timestamp');

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/time', routetime);

mongoose.connect('mongodb://localhost:27017/timestamps', { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to database!");
    app.listen(8080);
  })
  .catch(() => {
    console.log("Connection failed!");
  });
