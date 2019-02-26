const express = require('express');
const app = express();


app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/car',function(req, res) {
    res.render('cars')
});

app.get('/cat',function(req, res) {
    res.render('cats')
});

app.get('/car/new',function(req, res) {
    res.render('new')
});


app.listen(8000,function() {
    console.log('listing on 8000');
    
});