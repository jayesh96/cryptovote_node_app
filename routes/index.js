var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');

const modelIndex = require('../models/index');

app.use(express.static(__dirname + '/public'));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })

router.get('/', function(req, res, next) {
  res.render('splash', {});
});




router.get('/login', function(req, res, next) {
  console.log("hello")

  res.render('login', { title: 'Event Details' });
});

router.get('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('signup', { title: 'Event Details' });
});




router.post('/signup',upload.single('userDoc'), function(req, res, next) {
  console.log(req.body)
  modelIndex.registerNewUser(req.file.path, req.body,function(err, result){

        if(err)
        {

       var obj= new Object();
       obj.status=false;
       obj.message=err.sqlMessage;

       res.json(obj);
     }
     else
     {
       var myJSON = JSON.stringify(result);
       console.log("output "+myJSON);

       var obj= new Object();
       obj.status=true;
       obj.result = result
       obj.message='OK!';
       res.render('login', { title: 'Event Details' });

     }
  });

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
