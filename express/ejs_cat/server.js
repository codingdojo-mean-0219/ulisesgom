const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/cats',function(req, res) {
    res.render('cats')
});
app.get('/cats/:cat_id',function(req, res) {
    const cat_id = req.params.cat_id
    console.log(req.params)
    console.log(cat_id)
    cat_info = [
        {name:'cuddles',favorite_color:'blue',sleeping:["box","bed","anywhere"]},
        {name:'tiger',favorite_color:'yellow',sleeping:["box","bed","anywhere"]},
        {name:'jeff',favorite_color:'red',sleeping:["box","bed","anywhere"]},
    ]
    res.render('details', {cat: cat_info[cat_id]})
});

app.listen(8000, function() {
    console.log('on 8000')
})