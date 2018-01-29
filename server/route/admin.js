const express=require('express');
// const common=require('../libs/common.js');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'产品售卖平台'});

module.exports=function(){
	var router=express.Router();
	//检查登录的状态
	router.use((req,res,next)=>{
		if(!req.session['admin_id']&&req.url!='/login'){   //既没有登录，也没有请求登录的url
			res.redirect('/admin/login');
		}else{
			next();
		}
	});
	router.get('/login',(req,res)=>{
		res.render('admin/login.ejs',{});
	});
	router.post('/login',(req,res)=>{
		var username=req.body.username;
		var password=req.body.password;
		db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
			if(err){
				res.status(500).send('database error').end();
			}else{
				if(data.length==0){
					res.status(400).send('no this admin').end();
				}else{
					if(data[0].password==password){
						req.session['admin_id']=data[0].ID;
						res.redirect('/admin/')
					}else{
						res.status(400).send('this password is incorrect').end();
					}
				}
			}
		});
	});
	router.get('/',(req,res)=>{
		res.render('admin/index.ejs',{});
	})
	router.get('/product',(req,res)=>{
		res.render('admin/product.ejs',{});
	})
	return router;
}