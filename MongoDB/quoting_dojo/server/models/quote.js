const mongoose = require('mongoose');

module.exports = function() {
    const QuoteSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3},
        quote: {type: String, required: true, minlength: 5}
    }, {timestamps: true });
    mongoose.model('Quote', QuoteSchema);
};