const mongoose = require('mongoose');
const Product = mongoose.model('Product');
mongoose.options.useFindAndModify = false;
module.exports = {
    // index: function(req,res) {
    //     res.render('index');
    // },
    delete: function(req,res) {
        Product.findOneAndRemove({_id: req.params.product_id})
        .then(result => { 
            res.json({success: "doc was deleted"})
        })
        .catch(err => {
            res.json({error: err})
        })
    },
    new: function(req,res) {
        console.log(req.body)
        Product.create(req.body)
        .then(doc => {
            res.json({doc});
        })
        .catch(err => {
            for(var key in err.errors){
                req.flash('product', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/products/new');
        })
    },
    // newForm: function (req,res) {
    //     res.render('new');
    // },
    show: function(req,res) {
        
        Product.findOne({_id: req.params.product_id})
        .then(doc=>{
            
            res.json({doc});
        })
        .catch(err => {
            console.log(err)
            res.json({err});
        })
    },
    showAll: function(req,res) {
        Product.find({})
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
        
        Product.findByIdAndUpdate(req.params.product_id,{$set: req.body}, {runValidators: true}, (err, doc) => {
            if(err) {
                for(var key in err.errors){
                req.flash('product', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                res.redirect('/product/'+ req.params.product_id );
            } else {
                res.json({doc});
            }
        })
    }
}