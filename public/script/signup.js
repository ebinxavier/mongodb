function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


$("#btn").click(function(){
	console.log("email : "+$("#email").value);
if(!validateEmail($("#email")[0].value)||$("#pwd")[0].value.length<8)
{
	alert("Error in password(8 characters) or email");
}
else if($("#pwd")[0].value.length!=$("#pwd1")[0].value.length){
	alert("pwd mismatch");
}
else{
	// redirect to server
	// debugger;
	window.location="home.html?uname="+$("#uname")[0].value;
}
})