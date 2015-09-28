var express=require("express");
var io=require("socket.io");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var sessiones=require("./routers/admin.js");

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
var mysql=require("mysql");
var conexion=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"conaxport",
	port:3306
});
conexion.connect(function (error) {
	if (error) {
		throw error;
	}
	else{
		console.log("conexion correcta mysql.");
	}
});
conexion.end();
app.get("/",function (pet,res) {
	res.render("index");
});
app.get("/conaxadm",function (pet,res) {
	//var guia="1";
	//var sess=pet.session;//$_SESSION[''];
	//sess.adm="usuario";//$_SESSION['adm']="usuario"
	res.render("conaxadm/index");
});
app.post("/conaxadm",sessiones.validacion);
app.get("/conaxadm/administrador",sessiones.bienvenida);
app.listen(5001);
console.log("Puerto 5001");