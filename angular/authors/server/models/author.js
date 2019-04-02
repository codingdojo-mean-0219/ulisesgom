const mongoose = require('mongoose');

module.exports = function() {
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, required: true, trim: true, minlength: 3},
        
        quotes: [{
            quote: {type: String, trim: true, minlength: 3},
            votes: {type: Number, default: 0},
        }],
    }, {timestamps: true });
    mongoose.model('Author', AuthorSchema);
} 