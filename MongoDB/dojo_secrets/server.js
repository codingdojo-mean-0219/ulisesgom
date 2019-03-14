const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_database',{ useNewUrlParser: true });
const { Schema } = mongoose;
mongoose.options.usefindAndModify = false;

let CommentSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 4}
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);

let SecretSchema = new mongoose.Schema({
    content: {type: String, required: true, minlength: 4},
    comments: [CommentSchema],
    user: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});
mongoose.model('Secret', SecretSchema);

let UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, trim: true},
    email: {type: String, required: true, unique:true, validate: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/},
    password: {type: String, required: true, trim: true},
    secrets: [SecretSchema]
}, {timestamps: true});

mongoose.model('User', UserSchema);
const Secret = mongoose.model('Secret');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 340000 }
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    User.find({},(err, users) => {
        if(err) {console.log(err)};
        console.log(users)
        res.render('index', {users});
    })
});

app.post('/register', (req,res) => {
    if(req.body.password !== req.body.confirm || req.body.password.length < 8) {
        req.flash('registration', "Passwords must match and must be at least 8 characters");
        res.redirect('/');
    } else {
        bcrypt.hash(req.body.password, 10)
        .then(hashed => {
            User.create({name: req.body.name, email: req.body.email, password: hashed})
            .then(user => {    
                console.log('successfully added a user!', user);
                req.session.user_id = user._id
                res.redirect('/secrets');
            })
            .catch(err => {
                console.log("We have an error!", err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/')
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect('/')
        });
    }
});

app.post('/login', (req,res) => {
    User.findOne({email: req.body.email})
        .then( doc => {
            bcrypt.compare(req.body.password, doc.password)
            .then( result => {
                req.session.user_id = doc._id;
                res.redirect('/secrets');
            })
            .catch( error => {
                req.flash('login', "email or password were incorrect");
                res.redirect('/')
            });
        })
        .catch(err => {
            req.flash('login', "email or password were incorrect");
            res.redirect('/')
        });
});

app.get('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/')
})

app.get('/secrets', (req,res) => {
    //you left off here! delete all secrets then test if user arr has secrets added
    if(!req.session.user_id) {
        req.flash('registration', "not logged in");
        res.redirect('/');
    };
    Secret.find({}, (err,secrets) => {
        if(err) {console.log(err)}
        res.render('secrets', {secrets, sess: req.session})
    })
});

app.post('/secrets/new', (req,res) => {
    Secret.create({content: req.body.content, user: req.session.user_id})
    .then(result => {
        console.log("created secret", result);
        User.findByIdAndUpdate(req.session.user_id, {$push: {secrets: result}})
        .then(success => console.log(success))
        .catch(err => console.log(err));
        res.redirect('/secrets');
    })
    .catch(err => {
        console.log(err);
        req.flash('secret', err.errors.content.message);
        res.redirect('/secrets');
    })
});
app.get('/secrets/:secret_id', (req,res) => {
    Secret.findOne({_id: req.params.secret_id})
    .then(secret => {
        console.log('found');
        res.render('show', {secret});
    })
    .catch(err => {
        console.log('couldn"t find doc');
        res.redirect('/secrets');
    })
})
app.get('/secret/destroy/:secret_id', (req,res) => {
    Secret.findByIdAndRemove(req.params.secret_id)
    .then(result => {
        console.log('secret deleted');
        res.redirect('/secrets');
    })
    .catch(err => {
        console.log(err);
        res.redirect('/secrets');
    })
});

app.post('/comment/new/:secret_id', (req,res) => {
    Comment.create({content: req.body.content})
    .then(doc => {
        Secret.findByIdAndUpdate(req.params.secret_id, {$push: {comments: doc}})
        .then(result => {
            console.log('inserted comment');
            res.redirect('/secrets/'+req.params.secret_id);
        })
        .catch(err => {
            console.log(err);
            res.redirect('/secrets/'+req.params.secret_id);
        })
    })
    .catch(err => {
        console.log(err);
        res.redirect('/secrets/'+req.params.secret_id);
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});