const mongoose = require('mongoose');
const Birthday = mongoose.model('Birthday');
mongoose.options.useFindAndModify = false;
module.exports = {
    index: function(req,res) {
        Birthday.find({})
        .then(docs => {
            console.log('found docs');
            res.json({docs});
        })
        .catch(err => {
            console.log(err);
            res.json({error: err});
        })
    },
    new: function(req,res) {
        Birthday.create({name: req.params.name})
        .then(doc => {
            res.json({newDoc: doc});
        })
        .catch(err => {
            res.json({error: err});
        })
    },
    show: function(req,res) {
        Birthday.findOne({name: req.params.name})
        .then(doc=>{
            res.json({doc});
        })
        .catch(err => {
            res.json({error: err});
        })
    },
    delete: function(req,res) {
        Birthday.findOneAndRemove({name: req.params.name})
        .then(success=>{
            res.json({success: "doc was deleted"})
        })
        .catch(err => {
            res.json({error: err})
        })
    }
}