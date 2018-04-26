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



function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }


      console.log("AGGGGGGE",age)
    if(age < 18){
      return 'InValid';
    }
    if(age >= 18 && age <24 ){
      return 'Age_group1'
    }
    if(age >= 24 && age <42 ){
      return 'Age_group2'
    }
    if(age >= 42 && age <60 ){
      return 'Age_group3'
    }

    if(age>=60){
      return 'Age_group4'
    }

}





var INDEX = {

  registerNewUser : function(uploaded_document_path,data,callback){
    var current_date = new Date();
    var current_date_string = Math.floor(Date.now() / 1000);
    user_hash_value_input = data.full_name+data.email_+data.phone_np+current_date_string

    Promise.all([makehash(user_hash_key,user_hash_value_input)]).then((response)=>{
      var password_ = data.password_
      var encryptedpassword_ = encrypt(key, password_);
      console.log(data.dob,"----!!")

      var date_of_birth = new Date(data.dob);

      console.log(date_of_birth.toDateString(),"------!!!!----AGGGGEE",getAge(date_of_birth))


      dbConnection.query("INSERT INTO user_profile (full_name,email,password,mobile_no,document_uploaded_path,reg_date,user_hash,gender,document_type,date_of_birth,age_group) VALUES (?,?,?,?,?,NOW(),?,?,?,?,?)",[data.full_name,data.email_,encryptedpassword_,data.phone_np,uploaded_document_path,response[0],data.gender,data.document_type,date_of_birth,getAge(date_of_birth)] ,function( err, result){
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
    dbConnection.query("Select *,YEAR(CURDATE()) - YEAR(date_of_birth ) as age From user_profile where email=? and password =? LIMIT 1",[username,encryptedpassword_] ,function( err, result){
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

  },


  getAllUsers :function(callback){
    dbConnection.query("Select *,YEAR(CURDATE()) - YEAR(date_of_birth ) as age From user_profile ",function( err, result){
      if(err){
        console.log("Some Error Occurred");
        return callback(err);
      }else{
        console.log(result)
        var user = new Object();
        user.status = true;
        user.details = result;
        return callback(null,user);

      }


    });

  },

  updateUserStatus:function(user_id,callback){
    dbConnection.query("UPDATE user_profile SET is_verified =1 where id =?",[user_id],function( err, result){
      if(err){
        console.log("Some Error Occurred");
        return callback(err);
      }else{
        var user = new Object();
        user.status = true;
        return callback(null,user);

      }


    });

  },


};


module.exports=INDEX;
