const mongoose = require('mongoose');

module.exports = function() {
    const NoteSchema = new mongoose.Schema({
        note: {type: String, required: true, trim: true, minlength: 3}
    }, {timestamps: true});
    mongoose.model('Note', NoteSchema);
}