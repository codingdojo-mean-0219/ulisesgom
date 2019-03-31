const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose')();
const session = require('express-session');
const flash = require('express-flash');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));

// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

const routes = require('./server/config/routes')(app);

app.listen(8000,con => console.log('connected')); 