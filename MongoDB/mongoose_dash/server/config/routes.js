const mongoose = require('mongoose');
const Owl = mongoose.model('Owl');
const owls = require('../controllers/owls');

module.exports = function(app) {
    app.get('/', function(req, res) {
        owls.index(req,res);
    });
    app.get('/owls/new', (req,res) => {
        owls.new(req,res);
    });
    app.get('/owls/:owl_id', (req,res) => {
        owls.show(req,res);
    });
    app.get('/owls/edit/:owl_id', (req,res) => {
        owls.edit(req,res);
    });
    app.post('/owls/:owl_id', (req,res) => {
        owls.update(req,res);
    });
    app.post('/owls', function(req, res) {
        owls.create(req,res);
    });
    app.get('/owls/destroy/:owl_id', (req,res) => {
        owls.destroy(req,res);
    });
}