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