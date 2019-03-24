const mongoose = require('mongoose');

module.exports = function() {
    const CakeSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 2, trim:true},
        cakeUrl: {type: String, required: true, trim:true},
        rating: [{
            score: {type: Number, min:1, max:5},
            comment: {type: String}
        }]
    }, {timestamps: true });

    mongoose.model('Cake', CakeSchema);
} 
