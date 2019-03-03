const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000 }
}));
// app.use(function(req, res, next) {
//   res.locals.secret_num = req.session.secret_num;
//   next();
// });
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  if (!req.session.secret_num) {
    req.session.secret_num = Math.round(Math.random() * 100 );
  }
  console.log(req.session.secret_num);

  res.render('index', {"sess": req.session});
});

app.post('/check_num', (req,res) => {
  const guess = req.body.number;
  const secret_num = req.session.secret_num;

  if(guess > secret_num) {
    req.session.message = ["danger", "Too high!"];
  } else if(guess < secret_num) {
    req.session.message = ["danger", "Too low!"];
  } else {
    req.session.message = ["success", `You got it! The number was ${secret_num}`];
  }
  res.redirect('/')
});

app.get('/reset', (req,res) => {
  req.session.destroy((err)=>err);
  res.redirect('/')
})

app.listen(8000,listen => {console.log('on 8000')});