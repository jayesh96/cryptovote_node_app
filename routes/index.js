var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');

app.use(express.static(__dirname + '/public'));
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null,Date.now()+ '-' + file.fieldname + '-' + Date.now()+'.jpg');
  }
});
var upload = multer({ storage : storage })



router.get('/', function(req, res, next) {
  console.log("hello")
  res.render('splash', { title: 'Event Details' });
});




router.get('/login', function(req, res, next) {
  console.log("hello")
  res.render('login', { title: 'Event Details' });
});

router.get('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('signup', { title: 'Event Details' });
});


router.post('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body)
  res.render('signup', { title: 'Event Details' });
})


router.post('/upload', function(req, res, next) {

  res.render('signup', { title: 'Event Details' });
});



router.get('/upload', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('uploaddoc', { title: 'Event Details' });
});




router.get('/index', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: 'Event Details' });
});



router.get('/index2', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index2', { title: 'Event Details' });
});









module.exports = router;
