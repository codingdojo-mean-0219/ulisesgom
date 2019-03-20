const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const authors = require('../controllers/authors');
 
module.exports = function(app) {
    // app.get('/', (req,res) => { 
    //     authors.index(req,res);
    // });
    app.get('/authors', (req,res) => {
        authors.showAll(req,res);
    });
    // app.get('/author/new', (req,res) => {
    //     authors.newForm(req,res);
    // })
    app.post('/authors/new', (req,res) => {
        authors.new(req,res);
    });
    app.post('/book/new/:author_id', (req,res) => {
        authors.newBook(req,res);
    });
    app.delete('/remove/author/:author_id', (req,res) => {
        authors.delete(req,res);
    }); 
    app.delete('/remove/book/:book_id/:author_id', (req,res) => {
        authors.deleteBook(req,res);
    }); 
    app.get('/authors/:author_id', (req,res) => {
        authors.show(req,res);
    });
    app.put('/authors/:author_id', (req,res) => {
        authors.update(req,res);
    });
    // app.get('/author/update/:author_id', (req,res) => {
    //     authors.updateForm(req,res);
    // })
    
}