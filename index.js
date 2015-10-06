var express=require("express"),http=require("http");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var passport=require("passport");
var facebook=require('passport-facebook').Strategy;
var sessiones=require("./routers/admin.js");

var app=express();

var servidor=http.createServer(app);
var io=require("socket.io").listen(servidor);

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
app.use(passport.initialize());

var User={name:String,provider:String,provider_id:String,photo:String};
passport.serializeUser(function (user,done){
	done(null,user);
});
passport.deserializeUser(function (obj,done) {
	done(null,obj);
});
passport.use(new facebook({
		clientID: "1496743447287136",
		clientSecret: "1193004bfcab618b822a3b745f653706",
		callbackURL: "/auth/facebook/callback"
	},
	function (aceso,refrestoken,perfil,done) {
		User.findOne({provider_id:perfil.id},function (err,user) {
			if (err) {
				throw(err);
			}
			if (!err && user!=null) {
				return done(null,user);
			}
			var user=new User({
				provider_id:perfil.id,
				provider:perfil.provider,
				name:perfil.displayName,
				photo:perfil.photos[0].value
			});
			user.save(function (err) {
				if (err) {
					throw err;
				}
				done(null,user);
			});
		});
	}
));

app.use(function (pet,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//--------------------------------------------------
app.get("/",function (pet,res) {
	res.render("index");
});
app.get("/conaxadm",function (pet,res) {
	res.render("conaxadm/index");
});
app.post("/conaxadm",sessiones.validacion);
app.get("/conaxadm/administrador",sessiones.bienvenida);
app.post("/",function (pet,res) {
	res.redirect("/");
});
app.get("/chat",function (pet,res) {
	res.render("chat");
});
//----------------------------------------------------
app.get("/auth/facebook",passport.authenticate("facebook"));
app.get("/auth/facebook/callback",passport.authenticate("facebook",{
	successRedirect:"/",
	failusRedirect:"/login"
}));
io.on("connection",function (socket) {
	socket.on("chat mensaje",function (data) {
		//console.log(data);
		io.emit("chat mensaje",data);
	});
});
servidor.listen(5001);
console.log("Puerto 5001");