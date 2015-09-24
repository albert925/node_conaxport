var express=require("express");
var router=express.Router();
var mysql=require("mysql");
var conexion=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"conaxport",
	port:3306
});
function login (us,ps) {
	var regs="SELECT * from administrador where nam_adm='"+us+"' and pass_adm='"+ps+"'";
	conexion.connect();
	conexion.query(regs,function (error,result) {
		if (error) {
			console.log(error);
		}
		else{
			if (result.length>0) {
				var loi="si";
			}
			else{
				var loi="no";
			}
		}
		//console.log(loi);
		return loi;
	});
	return conexion;
	conexion.end();
}
exports.login=login;