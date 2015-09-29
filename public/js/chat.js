$(document).on("ready",inicio_chat);
var socket = io('http://localhost:5001/chat');
function inicio_chat () {
	/*socket.on('connect', function(){});
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});*/
  $("form").submit(enviarmensaje);
}
function enviarmensaje () {
	socket.emit("chat message",$("#m").val());
	$("#m").val("");
	return false;
}