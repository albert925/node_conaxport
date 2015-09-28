//var bodyParser=require("body-parser");
//var cookieParser=require("cookie-parser");
//var session=require("express-session");
var mysql=require("mysql");
var conexion=mysql.createPool({//conexion multiple
	connectionLimit:100, //importante
	host:"localhost",
	user:"root",
	password:"",
	database:"conaxport",
	port:3306
});
exports.validacion=function (pet,res) {
	var usR=pet.body.usadm;
	var psR=pet.body.pasadm;
	var regs="SELECT * from administrador where nam_adm='"+usR+"' and pass_adm='"+psR+"'";
	conexion.getConnection(function (error,conectT) {
		conectT.query(regs,function (err,result) {
			if (err) {
				console.log(err);
			}
			else{
				if (result.length>0) {
					//res.render("conaxadm/indexb",{a:"Encontrado"});
					var admin=[{idad:result[0].id_adm,nmad:result[0].nam_adm,crad:result[0].cor_adm,tpad:result[0].tip_adm}];
					//res.render("conaxadm/admin",{ad:admin});
					pet.session.adm=result[0].id_adm;
					pet.session.datadm={nmad:result[0].nam_adm,crad:result[0].cor_adm,tpad:result[0].tip_adm}
					console.log(pet.session.adm);
					res.redirect("/conaxadm/administrador");
				}
				else{
					res.render("conaxadm/index",{a:"Usuario o contraseña incorrectos"});
				}
			}
		});
	});
}
exports.bienvenida=function (pet,res) {
	console.log(pet.session.adm);
	if (pet.session.adm) {
		res.render("conaxadm/admin",{ad:pet.session.adm,bd:pet.session.datadm});
	}
	else{
		res.redirect("/conaxadm");
	}
}