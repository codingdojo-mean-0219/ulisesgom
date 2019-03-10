const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_first_database');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 5}
}, {timestamps: true });
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
    res.render('index');    
});
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote(req.body);
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/')
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/quotes');
        };
    })
});

app.get('/quotes',(req,res) => {
    let allQuotes;
    Quote.find({}, null, {sort: '-createdAt'}, (err, quotes) => {
        if(err) {
            console.log(err);
            redirect('/');
        } else {
            console.log(quotes, "in quotes find()");
            allQuotes = quotes;
            res.render('quotes', {quotes: allQuotes});
        }
    })
    
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})