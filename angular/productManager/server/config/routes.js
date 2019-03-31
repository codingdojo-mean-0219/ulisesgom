const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const products = require('../controllers/products');
const path = require('path');

module.exports = function(app) {
    // app.get('/', (req,res) => { 
    //     products.index(req,res);
    // });
    app.get('/products', (req,res) => {
        products.showAll(req,res);
    });
    // app.get('/products/new', (req,res) => {
    //     products.newForm(req,res);
    // })
    app.post('/products/new', (req,res) => {
        products.new(req,res);
    });
    app.delete('/remove/:product_id', (req,res) => {
        products.delete(req,res);
    }); 
    app.get('/products/:product_id', (req,res) => {
        products.show(req,res);
    });
    app.put('/products/:product_id', (req,res) => {
        products.update(req,res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
    
}