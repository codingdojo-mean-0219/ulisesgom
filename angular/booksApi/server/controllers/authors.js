const mongoose = require('mongoose');
const Author = mongoose.model('Author');
mongoose.options.useFindAndModify = false;
module.exports = {
    index: function(req,res) {
        res.render('index');
    },
    delete: function(req,res) {
        Author.findOneAndRemove({_id: req.params.author_id})
        .then(success=>{ 
            res.json({success: "doc was deleted"})
        })
        .catch(err => {
            res.json({error: err})
        })
    },
    deleteBook: function(req,res) {
        Author.findOneAndUpdate({_id: req.params.author_id,},{$pull: {books: {_id: req.params.book_id}}})
        .then(success=>{ 

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
             res.json({doc});
        })
        .catch(err => {
            res.json({error: err});
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
    update: function (req,res) {
        Author.findByIdAndUpdate(req.params.author_id,{$set: req.body})
        .then(doc => {
            res.json({msg: "update succesfull", doc: doc})
        })
        .catch(err=> {
            res.json({error: err})
        })
    },
    newBook: function (req,res) {
        console.log(req.body)
        Author.findByIdAndUpdate(req.params.author_id,{$push: req.body})
        .then(doc => {
            res.json({msg: "update succesfull", doc: doc})
        })
        .catch(err=> {
            res.json({error: err})
        })
    },
    updateForm: function(req,res) {
        Author.findById(req.params.task_id)
        .then(doc => {
            res.render('update', {doc})
        })
        .catch(err => {
            res.json({error: err})
        });
    }
}