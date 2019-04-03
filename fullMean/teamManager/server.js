const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./server/config/mongoose')();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

const routes = require('./server/config/routes')(app);

app.listen(8000,con => console.log('connected')); 