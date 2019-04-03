const Player = require('mongoose').model('Player');
const players = require('../controllers/players');
const path = require('path');

module.exports = function(app) {
    app.delete('/player/:id', (req,res) => {
        players.deletePlayer(req,res);
    })
    app.get('/players', (req,res) => {
        players.getPlayers(req,res);
    });
    app.put('/status/:id', (req,res) => {
        players.updateStatus(req,res);
    })
    app.post('/player/new', (req,res) => {
        players.addPlayer(req,res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}