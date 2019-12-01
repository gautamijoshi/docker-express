var express=require ("express");

var app=express()
var product=require("./route/product");
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin","X-Requested-With","Content-Type","Accept");
    next();
});
app.use("/product",product);
app.use(express.json());

app.listen(9898,()=>{
    console.log("Server started at port 9898");
});