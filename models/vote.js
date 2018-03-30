const dbConnection = require('../dbConnection');
const moment = require('moment');



var FEEDBACK = {

  getRegisterdParty :function(callback){
    // console.log(req.user,"-------")
    dbConnection.query("Select * From election_party" ,function( err, result){
      //console.log("top 3 rows are" + JSON.stringify(result))
      console.log(this.sql)
      if(err){
        console.log("error in getting parties");
        return callback(err);
      }else{
        var response = new Object();
        response.status = true;
        response.data = result ;

        return callback(null,response);

      }


    });

  }

};

module.exports=FEEDBACK;
