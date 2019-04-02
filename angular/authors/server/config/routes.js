const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const authors = require('../controllers/authors');
const path = require('path');
module.exports = function(app) {
    
    app.get('/authors', (req,res) => {
        authors.showAll(req,res);
    });
    // app.get('/authors/new', (req,res) => {
    //     authors.newForm(req,res);
    // })
    app.post('/authors/new', (req,res) => {
        authors.new(req,res);
    });
    app.delete('/remove/:author_id', (req,res) => {
        authors.delete(req,res);
    }); 
    app.get('/authors/:author_id', (req,res) => {
        authors.show(req,res);
    });
    app.get('/author/:author_id/:quote_id', (req,res) => {
        authors.deleteQuote(req,res);
    })
    app.put('/quote/:author_id', (req,res) => {
        authors.addQuote(req,res);
    });
    app.post('/authors/:author_id', (req,res) => {
        authors.addQuote(req,res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })

    
}