const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_first_database');
var OwlSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    wisdom: {type: Number, required: true},
    age: {type: Number, required: true},
}, {timestamps: true });
mongoose.model('Owl', OwlSchema); // We are setting this Schema in our Models as 'Owl'
var Owl = mongoose.model('Owl');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Owl.find({}, (err,docs) => {
        if(err) {console.log(err)};
        res.render('index', {owls: docs});    
    });
});

app.get('/owls/new', (req,res) => {
    res.render('new');
});

app.get('/owls/:owl_id', (req,res) => {
    Owl.findOne({_id: req.params.owl_id}, (err,docs) => {
        if(err) {console.log(err)};
        res.render('show', {owl: docs});
    });
});

app.get('/owls/edit/:owl_id', (req,res) => {
    Owl.findOne({_id: req.params.owl_id}, (err,docs) => {
        if(err) {console.log(err)};
        res.render('edit', {owl: docs});
    });
});
app.post('/owls/:owl_id', (req,res) => {
    Owl.findByIdAndUpdate(req.params.owl_id,req.body,(err, doc) => {
        if(err) {console.log(err)};
        res.redirect('/');
    })
});


app.post('/owls', function(req, res) {
    console.log("POST DATA", req.body);
    var owl = new Owl(req.body);
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    owl.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/owls/new')
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        };
    })
});

app.get('/owls/destroy/:owl_id', (req,res) => {
    Owl.findByIdAndRemove(req.params.owl_id, (err,doc) => {
        if(err) {console.log(err)};
        res.redirect('/');
    })
});


app.listen(8000, function() {
    console.log("listening on port 8000");
})