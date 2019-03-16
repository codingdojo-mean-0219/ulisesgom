const mongoose = require('mongoose');

module.exports = function() {
    const TaskSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength: 3},
        description: {tpye: String, default: ''},
        complete: {type: Boolean, default: false}
    }, {timestamps: true });
    mongoose.model('Task', TaskSchema);
} 