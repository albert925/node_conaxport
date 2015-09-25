var express=require("express");
var router=express.Router();

var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var mysql=require("mysql");

var conexion=mysql.createPool({//conexion multiple
	connectionLimit:100, //importante
	host:"localhost",
	user:"root",
	password:"",
	database:"conaxport",
	port:3306
});
router.post("/conaxadm/adm",function (pet,res,next) {
	console.log(pet.body);
	var usR=pet.body.usadm;
	var psR=pet.body.pasadm;
	var regs="SELECT * from administrador where nam_adm='"+usR+"' and pass_adm='"+psR+"'";
	conexion.getConnection(function (error,conectT) {
		conectT.query(regs,function (err,result) {
			conectT.release();
			console.log(result);
		});
	});
	res.render("conaxadm/index");
});
module.exports=router;