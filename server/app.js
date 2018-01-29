const express=require('express')
const static=require('express-static')
const bodyParser=require('body-parser')
const multer=require('multer')
const multerobj=multer({dest:'./static/upload'})
const mysql=require('mysql')
const cookieParser=require('cookie-parser')
const cookieSession=require('cookie-session')
const consolidate=require('consolidate')
const expressRoute=require('express-route')
const cors=require('cors')

var server=express()
server.listen(3010);

server.use('/api',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
},require('./route/web.js'));

server.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));

//1、获取求情数据
server.use(bodyParser.urlencoded())
server.use(multerobj.any());

//2、cookie,session
server.use(cookieParser());
(function(){
	var keys=[];
	for(var i=0;i<10000;i++){
		keys[i]='a_'+Math.random();
	}
	server.use(cookieSession({
		name:'sess_id',
		keys,
		maxAge:20*60*1000    //20min
	}));
})();

//3、模板
server.engine('html',consolidate.ejs);
server.set('views','template');
server.set('view engine','html');

//4、route
server.use('/',require('./route/web.js')());
server.use('/admin/',require('./route/admin.js')());

//5、default：static
server.use(static('/'))