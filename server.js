var express=require('express');
var app=express();
app.use(express.static('public'));
 // app.use(express.static(__dirname + '/public'));
app.use(express.static('node_modules'));
app.listen(3000);


var MongoClient = require('mongodb').MongoClient;


var url="mongodb://test:test@ds059496.mlab.com:59496/user_details";
MongoClient.connect(url, function(err, db) {
  console.log("connect"+err) 

  db.collection("userdata").insert({email:'ebin@gmail.com',pass:'12345'})
})









	app.get('/home',function(req,res){
		res.sendFile(__dirname+'/public/home.html');
	})
	app.get('/login',function(req,res){
		res.sendFile(__dirname+'/public/login.html');
	})
	app.get('/signup',function(req,res){
		res.sendFile(__dirname+'/public/signup.html');
	})

console.log("Listening to port:3000")