const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {res.render("form")});

app.post('/proccess', (req,res) => {
    req.session.info = req.body;
    res.redirect('/success')
});
app.get('/success', (req,res) => {
    console.log(req.session.info);
    res.render('success', req.session.info)
});


app.listen(8000,listen => {console.log('on 8000')});