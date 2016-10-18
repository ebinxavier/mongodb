$( document ).ready(function(){
	// $.get("json/data.json",function(data)
	// {

data=[
	{
		"head":"Post head1",
		"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		"date":"24/04/2016",
		"author":"Ebin Xavier"
	},
	{
		"head":"Post head2",
		"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		"date":"24/05/2016",
		"author":"Vasu"
	},
	{
		"head":"Post head3",
		"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		"date":"24/06/2016",
		"author":"Raju"
	}
];

editFunction=function(key){
	window.location="edit.html?id="+key;
}


		data.forEach(function(value,key){
		$("#main").append('\<div >\
		<div class="col-xs-1"></div>\
		<div class="col-xs-10 post">\
		<a href="#"  class="pull-right edit glyphicon glyphicon-edit" onclick="editFunction('+key+')">Edit</a>\
			<h2>'+value.head+'</h2>\
			<p class="content">'+value.content+'</p>\
			<div class="bottom_data">\
			<p class="pull-left">author : '+value.author+'</p>\
			<p class="pull-right">Date : '+value.date+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');

		})

if(window.location.href.indexOf('uname')!=-1){
localStorage.setItem("uname",window.location.href.split('=')[1]);
}
if(localStorage.getItem("uname")!="")
$('#login')[0].innerText="Logout ( "+localStorage.getItem("uname")+" )";
else
{
	$('#login')[0].innerText="Login";
	$(".edit").css("display","none");
}

	})
// })