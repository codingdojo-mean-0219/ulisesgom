const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const mongoose = require('./server/config/mongoose')(); for modularization

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));
 
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

// const routes = require('./server/config/routes')(app); for modularization
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });


app.listen(8000,con => console.log('connected')); 