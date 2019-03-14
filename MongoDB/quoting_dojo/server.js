const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_database');
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 5}
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
// const Quote = mongoose.model('Quote');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


const routes = require('./server/config/routes')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})