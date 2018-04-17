var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');
var request = require('request');

app.use(express.static(__dirname + '/public'));
var upload = multer({ dest: 'uploads/' })

const modelVote = require('../models/vote.js');


router.get('/getpartylist', function(req, res, next) {

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
       res.json(obj)

     }
  });
});









module.exports = router;
