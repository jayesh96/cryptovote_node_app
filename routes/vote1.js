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

  data_params = {
    "datetime": req.body['datetime'],
    "party_name":req.body['party_name'],
      "party_short_name":req.body['party_short_name'],
    "user_city":req.body['user_city'],
    "user_state":req.body['user_state']
  }
  myJSONObject = {
      "sender": req.body['user_hash_value'],
      "recipient": req.body['recipient'],
      "amount": "1",
      "data": data_params
  }

  request({
    url: "http://54.208.175.231:5000/transactions/new",
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
