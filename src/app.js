'use strict';
 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
app.listen(3000, () => {
    console.log('Server up!');
});


//Rotas
const index = require('./routes/index');
// const personRoute = require('./routes/personRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
// app.use('/person', personRoute);

module.exports = app;