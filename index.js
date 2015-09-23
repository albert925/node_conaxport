var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.set("view engine","jade");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function (pet,res) {
	res.render("index");
});
app.get("/conaxadm",function (pet,res) {
	res.render("conaxadm/index");
});
app.post("/conaxadm/adm",function (pet,res) {
	console.log(pet.body);
	res.render("conaxadm/index");
});
app.listen(5001);
console.log("Puerto 5001");