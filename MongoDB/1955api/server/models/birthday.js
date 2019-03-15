const mongoose = require('mongoose');

module.exports = function() {
    const BirthdaySchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3},
    }, {timestamps: true });
    mongoose.model('Birthday', BirthdaySchema);
} 