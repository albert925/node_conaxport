var express=require("express");
var io=require("socket.io");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var routers=require("./routers/admin.js");

var app=express();

app.set("view engine","jade");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
	secret:"misecreto",
	resave:false,
	saveUninitialized:true,
	cookie:{secure:true}
}));
//var ssql="INSERT into administrador(nam_adm,cor_adm,pass_adm,tip_adm) values('nodejs','nodjs@dominio.com','node123','1')";
/*var query=conexion.query(ssql,function (error,result) {
	if (error) {
		throw error;
	}
	else{
		console.log(result);
	}
});*/
/*var query=conexion.query(regs,function (error,result) {
	if (error) {
		throw error;
	}
	else{
		if (result.length>0) {
			//console.log(result[1].nam_adm+"-"+result[1].cor_adm+"-"+result[1].pass_adm);
			var totrs="si";
		}
		else{
			//console.log("registro no encontrado");
			var totrs="no";
		}
	}
});*/
app.use("/",routers);
app.get("/",function (pet,res) {
	res.render("index");
});
app.get("/conaxadm",function (pet,res) {
	var guia="1";
	var sess=pet.session;//$_SESSION[''];
	sess.adm="usuario";//$_SESSION['adm']="usuario"
	res.render("conaxadm/index");
});
app.listen(5001);
console.log("Puerto 5001");