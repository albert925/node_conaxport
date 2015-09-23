$(document).on("ready",inicioadminscrip);
function inicioadminscrip () {
	$("#ra").on("click",abrirA);
	$("#rb").on("click",abrirB);
	$("#rc").on("click",abrirC);
	$("#rd").on("click",abrirD);
}
function abrirA (ta) {
	ta.preventDefault();
	$("#cja").each(animarA);
}
function abrirB (tb) {
	tb.preventDefault();
	$("#cjb").each(animarB);
}
function abrirC (tc) {
	tc.preventDefault();
	$("#cjc").each(animarC);
}
function abrirD (td) {
	td.preventDefault();
	$("#cjd").each(animarD);
}
function animarA () {
	var altoA=$(this).css("height");
	if (altoA=="150px") {
		$(this).animate({height:"0"}, 500);
	}
	else{
		$(this).animate({height:"150px"}, 500);
	}
}
function animarB () {
	var altoA=$(this).css("height");
	if (altoA=="450px") {
		$(this).animate({height:"0"}, 500);
	}
	else{
		$(this).animate({height:"450px"}, 500);
	}
}
function animarC () {
	var altoA=$(this).css("height");
	if (altoA=="550px") {
		$(this).animate({height:"0"}, 500);
	}
	else{
		$(this).animate({height:"550px"}, 500);
	}
}
function animarD () {
	var altoA=$(this).css("height");
	if (altoA=="700px") {
		$(this).animate({height:"0"}, 500);
	}
	else{
		$(this).animate({height:"700px"}, 500);
	}
}