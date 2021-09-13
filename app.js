var createError = require('http-errors');


//const {allowInsecurePrototypeAccess} = require('handlebars/allow-prototype-access');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var expressHbs = require('express-handlebars');
var session=require('express-session');
var flash =require('connect-flash');
var passport=require('passport');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { error } = require('console');

var app = express();
require('./config/passport');

// view engine setup

app.set('view engine', 'handlebars');

//app.engine('.hbs', expressHbs({defaultLayout: 'layout' , handlebars:allowInsecurePrototypeAccess(Handlebars), extname: '.hbs'}));



app.set('view engine', 'hbs');
//engine.app.engine('hbs',expressHbs({}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret : 'Shopping-car_?@!' ,
  saveUninitialized :false, 
  resave:false,

}));
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

//****************************connect to DB*********************************************************
mongoose.connect('mongodb://localhost/Shopping-cart', { useNewUrlParser: true }, function error(req, res) {
  if (error) {
    console.log(error);
  }
  console.log('Connecting to DB');

});
//***************************************************************************************************/
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
