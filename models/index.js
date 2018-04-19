const dbConnection = require('../dbConnection');
const moment = require('moment');
var crypto = require("crypto")
var key = "supersecretkey";
var user_hash_key = 'someuserhashkey'


function encrypt(key, text) {
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(text, 'utf-8', 'hex');
        crypted += cipher.final('hex');

        return crypted;
}



function decrypt(key, text) {
        var decipher = crypto.createDecipher('aes-256-cbc', key);
        var decrypted = decipher.update(text, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');

        return decrypted;
}


function makehash(key, text) {
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(text, 'utf-8', 'hex');
        crypted += cipher.final('hex');

        return crypted;
}




var INDEX = {

  registerNewUser : function(uploaded_document_path,data,callback){
    var current_date = new Date();
    var current_date_string = Math.floor(Date.now() / 1000);
    user_hash_value_input = data.full_name+data.email_+data.phone_np+current_date_string

    Promise.all([makehash(user_hash_key,user_hash_value_input)]).then((response)=>{

      console.log(data,"=======", uploaded_document_path,"---->",response,"!!!!!!",user_hash_value_input)
      var password_ = data.password_
      var encryptedpassword_ = encrypt(key, password_);
      console.log("encrypted password:"+encryptedpassword_)
      dbConnection.query("INSERT INTO user_profile (full_name,email,password,mobile_no,document_uploaded_path,reg_date,user_hash,gender,document_type) VALUES (?,?,?,?,?,NOW(),?,?,?)",[data.full_name,data.email_,encryptedpassword_,data.phone_np,uploaded_document_path,response[0],data.gender,data.document_type] ,function( err, result){
        console.log(this.sql)
        if(err){
          console.log("Error in saving User Details, Try Again!");
          return callback(err);
        }else{
          var response = new Object();
          response.status = true;
          response.user_hash = encryptedpassword_
          response.message = "Saved Successfully!" ;

          return callback(null,response);

        }


      });



    },(errorMessage)=>{
      var event = new Object()
      event.event_id = eventId;
      event.message = "some error occured in fetching dat" ;
      return callback(null,event)

    });


  },


  loginUser :function(username,password,callback){
    var encryptedpassword_ = encrypt(key, password);
    console.log("-------------------->encrypted password:<----------"+encryptedpassword_)
    dbConnection.query("Select * From user_profile where email=? and password =? LIMIT 1",[username,encryptedpassword_] ,function( err, result){
      console.log(this.sql)
      if(err){
        console.log("Some Error Occurred");
        return callback(err);
      }else{
        if(result.length ==0){
          var user = new Object();
          user.status = false;
          user.code = 0;
          user.details = result;
          return callback(null,user);
        }else{
        var user = new Object();
        user.status = true;
        user.details = result;
        user.code = 1;
        return callback(null,user);
      }


      }


    });

  }

};


// dbConnection.query("INSERT INTO feedback (issue,message,user_id) VALUES (?,?,?); ",[feedback.feedback_category,feedback.issue_description,user_id] ,function( err, result){
//   //console.log("top 3 rows are" + JSON.stringify(result))
//   console.log(this.sql)
//   if(err){
//     console.log("error in getting past events");
//     return callback(err);
//   }else{
//     var feedback = new Object();
//     feedback.status = true;
//     feedback.message = "Saved Successfully!" ;
//
//     return callback(null,feedback);
//
//   }
//
//
// });

module.exports=INDEX;
