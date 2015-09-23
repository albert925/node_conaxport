$(document).on("ready",inicio_scipag);
var contador=1;
function inicio_scipag () {
	$("#botnmov").on("click",animarmenuB);
	$("#proye figure img,.vsms").mouseenter(mostrarcuador);
	$("#proye figure img,.vsms").mouseleave(colquicuadro);
	//$("#flexcliet figure img,#flexcliet figure figcaption").mouseenter(mostdos);
	//$("#flexcliet figure img,#flexcliet figure figcaption").mouseleave(oculdos);
	$(".dell").on("click",confirborrar);
}
function confirborrar () {
	return confirm("Estas seguro de eliminar el dato?");
}
function animarmenuB () {
	if (contador==1) {
		$("#mnB").animate({left:"0"}, 500);
		contador=0;
	}
	else{
		$("#mnB").animate({left:"-100%"}, 500);
		contador=1;
	}
}
function mostrarcuador () {
	var idH=$(this).attr("data-py");
	$("#mig_"+idH).css({display:"none"});
	$("#let_"+idH).css({display:"flex"});
}
function colquicuadro () {
	var idH=$(this).attr("data-py");
	$("#mig_"+idH).css({display:"block"});
	$("#let_"+idH).css({display:"none"});
}
function mostdos () {
	var idcap=$(this).attr("data-id");
	$("#pgt_"+idcap).css({display:"block"});
	$("#ygm_"+idcap).css({display:"none"});
}
function oculdos () {
	var idcap=$(this).attr("data-id");
	$("#ygm_"+idcap).css({display:"block"});
	$("#pgt_"+idcap).css({display:"none"});
}