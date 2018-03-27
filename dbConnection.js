const mysql = require('mysql');
var config = require('./config.json');


//create mysql connection pool
var dbconnection = mysql.createPool({

  connectionLimit : 100, //importantdbperb
  host:'localhost',
  user:'root',
  database:'scoot',
  password: config.db_password,
  debug    :  false,
   timezone: 'utc'
});


module.exports=dbconnection;
