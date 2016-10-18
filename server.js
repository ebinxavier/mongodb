var express=require('express');
var app=express();
app.use(express.static('public'));
 // app.use(express.static(__dirname + '/public'));
app.use(express.static('node_modules'));
app.listen(3000);


var MongoClient = require('mongodb').MongoClient;


var url="mongodb://ebin:ebin@ds019633.mlab.com:19633/myblog";

var table;
MongoClient.connect(url, function(err, db) {
if(err==null)
console.log("connected to db")
else 
console.log("not connected to db : "+err);

table=db.collection("userdata");

table.insert({email:'ebin@gmail.com',pass:'from conection'})

  


  table.find({email:'ebin@gmail.com'}, function(err, cursor){
    cursor.toArray(function(err,items){
    	console.log(items);
    });
    // db.close();
});


})









	app.get('/home',function(req,res){
		res.sendFile(__dirname+'/public/home.html');
	})
	app.get('/login',function(req,res){
		table.insert({email:'ebin@gmail.com',pass:'from Login'})
		res.sendFile(__dirname+'/public/login.html');
	})
	app.get('/signup',function(req,res){
		res.sendFile(__dirname+'/public/signup.html');
	})

console.log("Listening to port:3000")