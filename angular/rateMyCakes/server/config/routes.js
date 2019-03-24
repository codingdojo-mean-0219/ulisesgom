const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const cakes = require('../controllers/cakes');
 
module.exports = function(app) {
    app.get('/cakes',(req,res) => {
        cakes.all(req,res);
    })
    app.get('/cakes/:cake_id', (req,res) => {
        cakes.show(req,res);
    })
    app.post('/cakes/new', (req,res) => {
        cakes.new(req,res);
    });
    app.put('/cakes/:cake_id', (req,res) => {
        cakes.update(req,res);
    });
    // app.get('/cake/:place/:name', (req,res) => {
    //     cakes.process(req,res);
    // });
    
}