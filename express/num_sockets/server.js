const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);
let count = 0;

io.on('connection',socket => {
    io.emit('connected', {msg: "connected", num: count})
    
    socket.on('add', data => {
        count += data.num;
        io.emit('response', {num: count})
    })
    socket.on('clear', data => {
        count = data.num;
        io.emit('response', {num: count})
    })
})

app.get('/',(req,res) => {
    res.render('index')
})