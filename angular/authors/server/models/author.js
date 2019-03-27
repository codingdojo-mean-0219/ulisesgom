const mongoose = require('mongoose');

module.exports = function() {
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, required: true, trim: true, minlength: 3},
        quote: {type: String, required: true, trim: true, minlength: 3},
    }, {timestamps: true });
    mongoose.model('Author', AuthorSchema);
} 