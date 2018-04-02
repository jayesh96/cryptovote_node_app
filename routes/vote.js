var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');
var request = require('request');

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

const modelVote = require('../models/vote.js');


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


router.post('/makeVoteTransaction',function(req, res,next){
  console.log(req.body)
  myJSONObject = {
      "sender": "dsdsdddddddddddddsdsdsds2we232sdsd",
      "recipient": req.body['recipient'],
      "amount": "1",
      "data": new Date()
  }

  request({
    url: "http://54.208.175.231:5000/transactions/new",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
   var obj = new Object()
   obj.status = true
    res.json(obj)
});


})

router.get('/ballot', function(req, res, next) {
  modelVote.getRegisterdParty(function(err, result){

        if(err)
        {

       var obj= new Object();
       obj.status=false;
       obj.result=err.sqlMessage;

       res.json(obj);
     }
     else
     {


       var obj= new Object();
       obj.status=true;
       obj.result=result;
       console.log(obj.result.data)
       res.render('ballot', { obj:obj });

     }
  });
});









module.exports = router;
