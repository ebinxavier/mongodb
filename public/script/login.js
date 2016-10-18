if(localStorage.getItem("uname")!="")
	{
		// alert("logout");
		localStorage.setItem("uname","");
		window.location="home.html";
	}
// else alert("login");

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
$("#btn").click(function(){
if(!validateEmail($("#email")[0].value)||$("#pwd")[0].value.length<8)
{
	alert("Error in password(8 characters) or email");
}
else{
	// redirect to server
	window.location="home.html?uname=ebin";
}
})
$(".btn-signup").click(function(){
	// redirect to server
	// alert("sign up");
	window.location="signup";

})