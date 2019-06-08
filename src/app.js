'use strict';
 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Rotas
router.get('/', function (req, res) {
    res.status(200).send({
        title: 'Project Invillia Test',
        version: '0.0.1'
    });
});

app.use('/', router);

const jogadorRouter = require('./app/jogador/jogadorRoutes');
app.use('/jogador', jogadorRouter);

module.exports = app;