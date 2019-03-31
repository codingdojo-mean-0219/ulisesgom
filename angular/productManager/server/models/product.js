const mongoose = require('mongoose');

module.exports = function() {
    const ProductSchema = new mongoose.Schema({
        name: {type: String, required: true, trim: true, minlength: 3},
        price: {type: Number, required: true},
    }, {timestamps: true });
    mongoose.model('Product', ProductSchema);
} 