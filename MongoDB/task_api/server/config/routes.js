const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const tasks = require('../controllers/tasks');

module.exports = function(app) {
    app.get('/', (req,res) => { 
        tasks.index(req,res);
    });
    app.get('/tasks', (req,res) => {
        tasks.showAll(req,res);
    });
    app.get('/task/new', (req,res) => {
        tasks.newForm(req,res);
    })
    app.post('/task/new', (req,res) => {
        tasks.new(req,res);
    });
    app.delete('/remove/:task_id', (req,res) => {
        tasks.delete(req,res);
    }); 
    app.get('/task/:task_id', (req,res) => {
        tasks.show(req,res);
    });
    app.put('/task/:task_id', (req,res) => {
        tasks.update(req,res);
    });
    app.get('/task/update/:task_id', (req,res) => {
        tasks.updateForm(req,res);
    })
    
}