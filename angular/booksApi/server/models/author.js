const mongoose = require('mongoose');

let beforeToday = function(v) {
    let today = new Date();
    let todayMilli = today.getMilliseconds();
    let vMilli = v.getMilliseconds();
    if(vMilli >= todayMilli) {
        return false;
    } else{return true}
}
module.exports = function() {
    const AuthorSchema = new mongoose.Schema({
        first_name: {type: String, required: true, minlength: 2},
        last_name: {type: String, required: true, minlength: 2},
        country: {type: String, required: true, minlength: 3},
        birth: {type: Date, max:Date.now()},
        books: [{
            title: {type: String, required: true, minlength: 2},
            publish_year: {type: Number, max:2019}
        }]
    }, {timestamps: true });

    mongoose.model('Author', AuthorSchema);
} 
