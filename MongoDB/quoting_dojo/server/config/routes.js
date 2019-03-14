const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app) {
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
}