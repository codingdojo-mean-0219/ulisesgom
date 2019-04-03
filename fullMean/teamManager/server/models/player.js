const mongoose = require('mongoose');

module.exports = function() {
    const PlayerSchema = new mongoose.Schema({
        name: {type: String, required: true, trim: true, minlength: 3},
        position: {type: String},
        status: {type: Number, default: 0}
    }, {timestamps: true});
    mongoose.model('Player', PlayerSchema);
} 