const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.emit('greet', {msg:"you are connected"})
    // socket.on('thankyou',data=>console.log(data.msg))
    socket.on('submit', data => {
        let randomNumber = Math.round(Math.random() * 1000)
        let dataString = JSON.stringify(data);
        console.log(randomNumber)
        console.log(dataString)
        socket.emit('updated_message', {msg: `You emitted the following: ${dataString}`});
        socket.emit('random_number', {number: randomNumber});
    })
});


app.get('/',(req,res) => {
    res.render('index');
})