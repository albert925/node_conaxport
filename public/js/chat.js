$(document).on("ready",inicio_chat);
var socket = io.connect();//conexion multile sin dominio unico con 192.168.1.112:5001 local localhost:5001
function codigohtml (dato) {
	var html="<article>";
		html="<div>"+dato+"</div>";
	html+="</article>";
	return html;
}
function inicio_chat () {
  $("form").submit(enviarmensaje);
  socket.on("chat mensaje",function (data) {
  	console.log(data);
  	$("#mensajes").prepend(codigohtml(data));
  });
}
function enviarmensaje () {
	socket.emit("chat mensaje",$("#m").val());
	$("#m").val("");
	return false;
}