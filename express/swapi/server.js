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
    req.session.nextPage = 'https://swapi.co/api/people';
    axiosSwapi(req,res,req.session.nextPage);
});

app.get('/planets', (req,res) => {
    req.session.nextPage = 'https://swapi.co/api/planets';
    console.log('here')
    axiosSwapi(req,res,req.session.nextPage);
});

app.get('/next', (req,res) => {
    axiosSwapi(req,res,req.session.nextPage);
});
app.get('/prev', (req,res) => {
    axiosSwapi(req,res,req.session.prevPage);
});

function axiosSwapi(request, response, url) {
    axios.get(url).then(data => {
        request.session.nextPage = data.data.next;
        request.session.prevPage = data.data.previous;
        response.json(data.data);
    }).catch(err => {
        console.log(data.err);
        response.json(data.err);
    });
}

app.listen(8000, function() {
    console.log("on 8000")
});