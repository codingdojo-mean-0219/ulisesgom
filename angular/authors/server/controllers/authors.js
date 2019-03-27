const mongoose = require('mongoose');
const Author = mongoose.model('Author');
mongoose.options.useFindAndModify = false;
module.exports = {
    index: function(req,res) {
        res.render('index');
    },
    delete: function(req,res) {
        Author.findOneAndRemove({_id: req.params.author_id})
        .then(result => { 
            res.json({success: "doc was deleted"})
        })
        .catch(err => {
            res.json({error: err})
        })
    },
    new: function(req,res) {
        console.log(req.body)
        Author.create(req.body)
        .then(doc => {
            res.redirect('/');
        })
        .catch(err => {
            for(var key in err.errors){
                req.flash('author', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/authors/new');
        })
    },
    newForm: function (req,res) {
        res.render('new');
    },
    show: function(req,res) {
        Author.findOne({_id: req.params.author_id})
        .then(doc=>{
            
            res.render('update', {doc});
        })
        .catch(err => {
            res.json({error: err});
        })
    },
    showAll: function(req,res) {
        Author.find({})
        .then(docs => {
            console.log('found docs');
            res.json({docs});
        })
        .catch(err => {
            console.log(err);
            res.json({error: err});
        })
    },
    update: function (req,res) {
        
        Author.findByIdAndUpdate(req.params.author_id,{$set: req.body}, {runValidators: true}, (err, doc) => {
            if(err) {
                for(var key in err.errors){
                req.flash('author', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/authors/'+ req.params.author_id );
            } else {
                res.redirect('/');

            }
        })
    }
}