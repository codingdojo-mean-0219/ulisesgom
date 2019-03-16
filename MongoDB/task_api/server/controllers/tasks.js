const mongoose = require('mongoose');
const Task = mongoose.model('Task');
mongoose.options.useFindAndModify = false;
module.exports = {
    index: function(req,res) {
        res.render('index');
    },
    delete: function(req,res) {
        Task.findOneAndRemove({_id: req.params.task_id})
        .then(success=>{ 
            res.json({success: "doc was deleted"})
        })
        .catch(err => {
            res.json({error: err})
        })
    },
    new: function(req,res) {
        console.log(req.body)
        Task.create(req.body)
        .then(doc => {
            res.json({newDoc: doc});
        })
        .catch(err => {
            res.json({error: err});
        })
    },
    show: function(req,res) {
        Task.findOne({_id: req.params.task_id})
        .then(doc=>{
            res.json({doc});
        })
        .catch(err => {
            res.json({error: err});
        })
    },
    showAll: function(req,res) {
        Task.find({})
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
        Task.findByIdAndUpdate(req.params.task_id)
        .then(doc => {
            res.json({msg: "update succesfull", doc: doc})
        })
        .catch(err=> {
            res.json({error: err})
        })
    },
    updateForm: function(req,res) {
        Task.findById(req.params.task_id)
        .then(doc => {
            res.render('update', {doc})
        })
        .catch(err => {
            res.json({error: err})
        });
    }
}