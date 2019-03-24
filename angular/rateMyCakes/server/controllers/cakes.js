const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
mongoose.options.useFindAndModify = false;


module.exports = {
    index: function(req,res) {
        res.render('index');
    },
    all: function (req,res) {
        Cake.find({})
        .then(docs => {
            res.json({docs});
        })
        .catch(err => res.json({err}))
    },
    new: function (req,res) {
        console.log(req.body);
        Cake.create(req.body)
        .then(doc => {
            console.log('created', doc);
            res.json({doc});
        })
        .catch(err => res.json({err}));
    },
    show: function(req,res) {
        console.log(req.params)
        Cake.findOne({_id: req.params.cake_id})
        .then(doc => {
            console.log('got it');
            res.json({doc})
        })
        .catch(err => res.json({err}))
    },
    update: function(req,res) {
        console.log(req.body,'=', req.params);
        Cake.findByIdAndUpdate(req.params.cake_id,{$push: {rating: req.body}})
        .then(doc => {
            console.log("updated");
            res.json({doc})
        })
        .catch(err => res.json({err}))
    }
}