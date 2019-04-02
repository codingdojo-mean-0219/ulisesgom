const mongoose = require('mongoose');
const Author = mongoose.model('Author');
mongoose.options.useFindAndModify = false;
module.exports = {
    addQuote: function(req,res) {
        Author.findByIdAndUpdate(req.params.author_id, {$push: req.body}, {runValidators:true})
        .then(doc => {
            console.log(doc);
            res.json({doc})
        })
        .catch(err => {
            console.log(err)
            let msg = [];
            for(var key in err.errors){
                msg.push(err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.json({message: msg})
        })
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
    deleteQuote: function (req,res) {
        console.log('here')
        Author.findByIdAndUpdate(req.params.author_id, {$pull: {quotes: {_id: req.params.quote_id}}})
        .then(result=> {
            res.json({success: 'quote was removed'})
        })
        .catch(err=> {res.json({err})})
    },
    new: function(req,res) {
        console.log(req.body)
        Author.create(req.body)
        .then(doc => {
            console.log(doc)
            res.json({doc});
        })
        .catch(err => {
            console.log(err)
            let msg = [];
            for(var key in err.errors){
                msg.push(err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.json({message: msg})
        })
    },
    show: function(req,res) {
        Author.findOne({_id: req.params.author_id})
        .then(doc=>{
            
            res.json({doc});
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
}