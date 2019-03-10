const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_database');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    let allUsers;
    User.find({}, (err, users) => {
        if(err) {
            console.log(err);
        } else {
            allUsers = users;
            console.log(allUsers);
            res.render('index', {users: allUsers});
        }
    });
    
    
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        }
        res.redirect('/');
    })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})