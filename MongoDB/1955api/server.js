const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose')();

app.use(bodyParser.json());
const routes = require('./server/config/routes')(app);

app.listen(8000,con => console.log('connected'));