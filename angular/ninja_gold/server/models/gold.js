const mongoose = require('mongoose');

module.exports = function() {
    const GoldSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 2},
        gold: {type: Number, default: 0},
        log: [{type: String}]
    }, {timestamps: true });

    mongoose.model('Gold', GoldSchema);
} 
