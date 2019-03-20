const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));

app.get('/', (req,res) => {
    res.render("index")
})

app.listen(8000,con => console.log('connected')); 