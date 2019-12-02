var express=require("express");
var mysql= require("mysql");

var router=express();

var connection = mysql.createConnection({
    host:"172.18.4.113",
    database:"myapp_db",
    port:"9099",
    user:"root",
    password:"root"
});

connection.connect();

router.get("/",(request,response)=>{
    var queryText="select * from category";

    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err.message));
        }
    });
});



module.exports=router;
