$(document).on("ready",inicio_chat);
var socket = io.connect("http://localhost:5001");
function inicio_chat () {
  $("form").submit(enviarmensaje);
  socket.on("news",function (data) {
  	console.log(data);
  	socket.emit("Mensaje de evento",{my:"datos"});
  });
}
function enviarmensaje () {
	socket.emit("chat message",$("#m").val());
	$("#m").val("");
	return false;
}