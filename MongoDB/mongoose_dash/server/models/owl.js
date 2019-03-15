const mongoose = require('mongoose');

module.exports = function() {
    const OwlSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3},
        wisdom: {type: Number, required: true},
        age: {type: Number, required: true},
    }, {timestamps: true });
    mongoose.model('Owl', OwlSchema);
}