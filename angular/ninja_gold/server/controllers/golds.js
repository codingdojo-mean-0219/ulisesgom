const mongoose = require('mongoose');
const Gold = mongoose.model('Gold');
mongoose.options.useFindAndModify = false;

let farmGold = () => Math.round(Math.random() * (5 - 2) + 2);
let caveGold = () => Math.round(Math.random() * (10 - 5) + 5);
let houseGold = () => Math.round(Math.random() * (15 - 7) + 7);
let casinoGold = () => {
    let amount = Math.round(Math.random() * 100)
    let winLose = Math.round(Math.random());
    return [amount, winLose];
};

module.exports = {
    index: function(req,res) {
        res.render('index');
    },
    all: function (req,res) {
        Gold.find({})
        .then(docs => {
            res.json({docs});
        })
        .catch(err => res.json({err}))
    },
    new: function (req,res) {
        console.log(req.body);
        Gold.create(req.body)
        .then(doc => {
            console.log('created', doc);
            res.json({doc});
        })
        .catch(err => res.json({err}));
    },
    show: function(req,res) {
        console.log(req.params)
        Gold.findOne({name: req.params.name})
        .then(doc => {
            console.log('got it');
            res.json({doc})
        })
        .catch(err => res.json({err}))
    },
    process: function(req,res) {
        Gold.findOne({name: req.params.name})
        .then(user => {
            console.log(user);
            let location = req.params.place;
            if(location === 'farm') {
                let won = farmGold();
                user.gold += won;
                user.log.unshift(`You got ${won} gold at the farm!`)
                user.save();
            };
            if(location === 'cave') {
                let won = caveGold();
                user.gold += won;
                user.log.unshift(`You got ${won} gold at the cave!`)
                user.save();
            };
            if(location === 'house') {
                let won = houseGold();
                user.gold += won;
                user.log.unshift(`You got ${won} gold at the house!`)
                user.save();
            };
            if(location === 'casino') {
                let result = casinoGold();
                if (result[1] == 0) {
                    user.gold -= result[0];
                    user.log.unshift(`You lost ${result[0]} gold at the casino!`)
                    user.save();
                } else {
                    user.gold += result[0];
                    user.log.unshift(`You got ${result[0]} gold at the casino!`)
                    user.save();
                }
            };
            res.json({user})
        })
        .catch(err => res.json({err}))
    }
}