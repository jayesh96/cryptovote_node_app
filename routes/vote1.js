var express = require('express');
var router = express.Router();
var app = express();
var multer  =   require('multer');
var path = require('path');
var request = require('request');

app.use(express.static(__dirname + '/public'));
var upload = multer({ dest: 'uploads/' })

const modelVote = require('../models/vote.js');

router.post('/makeVoteTransaction',function(req, res,next){
  console.log(req.body)
  myJSONObject = {
      "sender": "dsdsdddddddddddddsdsdsds2we232sdsd",
      "recipient": req.body['recipient'],
      "amount": "1",
      "data": new Date()
  }

  request({
    url: "http://localhost:5000/transactions/new",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
  console.log(error,response.body)
   var obj = new Object()
   obj.status = true
    res.json(obj)
});


})










module.exports = router;
