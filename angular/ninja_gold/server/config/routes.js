const mongoose = require('mongoose');
const Gold = mongoose.model('Gold');
const golds = require('../controllers/golds');
 
module.exports = function(app) {
    app.get('/golds',(req,res) => {
        golds.all(req,res);
    })
    app.get('/gold/:name', (req,res) => {
        golds.show(req,res);
    })
    app.post('/gold/new', (req,res) => {
        golds.new(req,res);
    })
    app.get('/gold/:place/:name', (req,res) => {
        golds.process(req,res);
    });
    
}