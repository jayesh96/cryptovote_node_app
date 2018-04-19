var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');
var request = require('request');
var moment = require('moment');
var current_time = moment().format('MMMM Do YY')


app.use(express.static(__dirname + '/public'));
var upload = multer({ dest: 'uploads/' })

const modelVote = require('../models/vote.js');


router.get('/upload', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('uploaddoc', { title: 'Event Details' });
});


router.get('/home', function(req, res, next) {

  res.render('home', { title: 'Event Details',current_time:current_time });

});
router.get('/votenow', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('votenow', { user:req.user ,current_time:current_time});
});



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
       console.log(req.user,"USEEEEERRRRRR!")
       res.render('ballot', { obj:obj,user:req.user });

     }
  });
});



router.get('/profile', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('profile', { user:req.user });
});







module.exports = router;
