const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const tasks = require('../controllers/tasks');

module.exports = function(app) {
    // app.get('/', (req,res) => { 
    //     tasks.index(req,res);
    // });
    app.get('/tasks', (req,res) => {
        tasks.showAll(req,res);
    });
    app.post('/tasks/new', (req,res) => {
        tasks.new(req,res);
    });
    app.delete('/remove/:task_id', (req,res) => {
        tasks.delete(req,res);
    }); 
    app.get('/tasks/:task_id', (req,res) => {
        tasks.show(req,res);
    });
    app.put('/tasks/:task_id', (req,res) => {
        tasks.update(req,res);
    });

    
}