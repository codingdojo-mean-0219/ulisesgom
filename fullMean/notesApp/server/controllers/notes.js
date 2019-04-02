const Note = require('mongoose').model('Note');

module.exports = {
    addNote: (req,res) => {
        Note.create(req.body)
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
    getNotes: (req,res) => {
        Note.find({},null,{sort: "-createdAt"})
        .then(docs => {
            console.log('found docs');
            res.json({docs});
        })
    }
}