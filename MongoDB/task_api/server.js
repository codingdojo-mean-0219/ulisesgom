const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose')();

app.use(bodyParser.json());
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

const routes = require('./server/config/routes')(app);

app.listen(8000,con => console.log('connected')); 