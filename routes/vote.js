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


router.get('/upload', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('uploaddoc', { title: 'Event Details' });
});


router.get('/home', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('home', { title: 'Event Details' });
});
router.get('/votenow', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('votenow', { title: 'Event Details' });
});
router.get('/ballot', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('ballot', { title: 'Event Details' });
});









module.exports = router;
