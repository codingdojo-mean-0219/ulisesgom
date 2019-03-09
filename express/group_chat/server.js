const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({
    // genid: function(req) {
    //     return genuuid() // use UUIDs for session IDs
    // },
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 240000 }
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);

io.on('connection',socket => {
    io.emit('connected', {msg: "connected"})
    
    socket.on('new_user', data => {
        io.emit('new_user_connected', {name: data.name})
    })
    socket.on('new_message', data => {
        console.log(data.message);
        io.emit('post', {post: data.message, name: data.name})
    })
    
})

app.get('/',(req,res) => {
    res.render('index', {user_id: req.session.id})
})