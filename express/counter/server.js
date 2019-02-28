const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    if(!req.session.count) {
        req.session.count = 1;
    } else {
        req.session.count++;
    }
    res.render('index', {"count": req.session.count});
});

app.get('/add2', function(req,res) {
    req.session.count++;
    res.redirect('/');
});

app.get('/clear', function(req,res) {
    delete req.session.count;
    res.redirect('/');
});







app.listen(8000,function() {
    console.log('on 8000');
});