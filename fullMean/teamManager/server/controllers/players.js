const Player = require('mongoose').model('Player');

module.exports = {
    addPlayer: (req,res) => {
        Player.create(req.body)
        .then(doc => {
            console.log(doc);
            res.json({doc});
        })
        .catch(err => {
            console.log(err)
            let msg = [];
            for(var key in err.errors){
                msg.push(err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.json({message: msg})
        })
    },
    deletePlayer: (req,res) => {
        Player.findByIdAndDelete(req.params.id)
        .then(doc => {
            res.json({deleted: doc});
        })
        .catch(err => {
            res.json(err);
        })
    },
    getPlayers: (req,res) => {
        Player.find({})
        .then(docs => {
            console.log('found docs');
            res.json({docs});
        })
    },
    updateStatus: (req,res) => {
        Player.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        .then(doc => {
            console.log('updated');
            res.json({doc})
        })
        .catch(err=> {
            res.json({doc})
        })
    }
}