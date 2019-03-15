const mongoose = require('mongoose');
const Birthday = mongoose.model('Birthday');
const birthdays = require('../controllers/birthdays');

module.exports = function(app) {
    app.get('/', (req,res) => {
        birthdays.index(req,res);
    });
    app.get('/new/:name', (req,res) => {
        birthdays.new(req,res);
    });
    app.get('/remove/:name', (req,res) => {
        birthdays.delete(req,res);
    });
    app.get('/:name', (req,res) => {
        birthdays.show(req,res);
    });
    
}