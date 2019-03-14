const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require('../controllers/quotes')
module.exports = function(app) {
    app.get('/', function(req, res) {
        quotes.index(req,res);
    });
    app.post('/quotes', function(req, res) {
        quotes.new(req,res);
    });
    app.get('/quotes',(req,res) => {
        quotes.show(req,res);
    });
};