const Note = require('mongoose').model('Note');
const notes = require('../controllers/notes');
const path = require('path');

module.exports = function(app) {
    app.get('/notes', (req,res) => {
        notes.getNotes(req,res);
    });

    app.post('/note/new', (req,res) => {
        notes.addNote(req,res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}