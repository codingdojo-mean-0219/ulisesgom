const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000 }
}));

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/people', (req,res) => {
    axios.get('https://swapi.co/api/people').then(response => {
        console.log(response.data);
        res.json(response.data);
    }).catch(err => {
        console.log(response.err);
        res.json(response.err);
    });
})


app.listen(8000, function() {
    console.log("on 8000")
});