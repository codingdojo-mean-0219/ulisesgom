const mongoose = require('mongoose');
const Owl = mongoose.model('Owl');

module.exports = {
    index: function(req,res) {
        Owl.find({}, (err,docs) => {
            if(err) {console.log(err)};
            res.render('index', {owls: docs});    
        });
    },
    new: function(req,res) {
        res.render('new');
    },
    show: function(req,res) {
        Owl.findOne({_id: req.params.owl_id}, (err,docs) => {
            if(err) {console.log(err)};
            res.render('show', {owl: docs});
        });
    },
    edit: function(req,res) {
        Owl.findOne({_id: req.params.owl_id}, (err,docs) => {
            if(err) {console.log(err)};
            res.render('edit', {owl: docs});
        });
    },
    update: function(req,res) {
        Owl.findByIdAndUpdate(req.params.owl_id,req.body,(err, doc) => {
            if(err) {console.log(err)};
            res.redirect('/');
        });
    },
    create: function(req,res) {
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
        });
    },
    destroy: function(req,res) {
        Owl.findByIdAndRemove(req.params.owl_id, (err,doc) => {
            if(err) {console.log(err)};
            res.redirect('/');
        })
    }
}