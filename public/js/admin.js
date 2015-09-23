$(document).on("ready",inicio_admnining);
function inicio_admnining () {
	$("#valingadm").on("click",ingreadm);
}
var bien={color:"#00A5D4"};
var mal={color:"#C23234"};
var normal={color:"#F7F7F7"};
function ingreadm () {
	var adus=$("#usadm").val();
	var adps=$("#pasadm").val();
	if (adus=="") {
		$("#txA").css(mal).text("Ingrese el nombre de usuario");
		return false;
	}
	else{
		if (adps=="") {
			$("#txA").css(mal).text("Ingrese la contraseña");
			return false;
		}
		else{
			$("#txA").css(normal).text("");
			$.ajax({
				url: '/conaxadm/adm',
				type: 'POST',
				data: JSON.stringify({a:adus,b:adps}),
				cache: false,
				contentType: "application/json",//false
				processData: false,
				beforeSend:function () {
					$("#txA").prepend("<center><img src='/images/loadingb.gif' alt='loading' /></center>");
				},
				success:relsingadm,
				error:function () {
					$("#mesajimgavatar").css(normal).text("Ocurrión un error");
					$("#mesajimgavatar").fadeIn();$("#mesajimgavatar").fadeOut(3000);
				}
			});
			return false;
		}
	}
}
function relsingadm (data) {
	console.log(data);
}