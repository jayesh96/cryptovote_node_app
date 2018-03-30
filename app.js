var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var LinkedInStrategy = require('passport-linkedin').Strategy;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session  = require('express-session');
var multer  =   require('multer');


var app = express();
var config = require('./config.json');


var path = require('path');


var index = require('./routes/index');
var vote = require('./routes/vote');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(session({
	secret: 'vidyapathaisalwaysrunning',
   key: 'sid',
	resave: true,
	saveUninitialized: true
 } )); // session secret


app.use('/', index);
app.use('/vote', vote);



function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
res.redirect('/')
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
