const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_first_database');

let CommentSchema = new mongoose.Schema({
    author: {type: String, required: [true, "Author's name must be at least 2 characters long"], minlength: 2},
    content: {type: String, required: [true, "Comment must be at least 4 characters long"], minlength: 4}
}, {timestamps: true });
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Comment'

let MessageSchema = new mongoose.Schema({
    author: {type: String, required: [true, "Author's name must be at least 2 characters long"], minlength: 2},
    content: {type: String, required: [true, "Message must be at least 4 characters long"], minlength: 4},
    comments: [CommentSchema]
}, {timestamps: true });
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Message.find({}, (err,docs) => {
        if(err) {console.log(err)};
        console.log(docs)
        res.render('index', {messages: docs});    
    });
});

app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    const message = new Message(req.body);
    
    message.save(function(err) {
        if(err) {
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/')
        } else { 
            console.log('successfully added a user!');
            res.redirect('/');
        };
    })
});
app.post('/comment/:message_id', function(req, res) {
    console.log("POST DATA", req.body);
    Comment.create(req.body, function(err, data){
        console.log(data);
        if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/')
        }
        else {
             Message.findOneAndUpdate({_id: req.params.message_id}, {$push: {comments: data}}, function(err, data){
                if(err){
                    console.log('could not add comments to message');
                    res.redirect('/');
                }
                else {
                    console.log('Comment in message!')
                    res.redirect('/');
                }
            })
        }
    })
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})