const express=require('express')
const mysql=require('mysql')
var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'产品售卖平台'})
module.exports=function(){
	var router=express.Router();
	router.get('/get_users',(req,res)=>{
		db.query(`SELECT * FROM user_table`,(err,data)=>{
			if(err){
				res.status(500).send('database error');
			}else{
				res.send(data).end();
			}
		});
	});
	return router;

}



// const express=require('express');
// const mysql=require('mysql');

// var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'产品售卖平台'});

// module.exports=function(){
// 	var router=express.Router();
// 	router.get('/get_users',(req,res)=>{
// 		var username=req.body.username;
// 		var password=req.body.password;
// 		db.query(`SELECT * FROM user_table`,(err,data)=>{
// 			if(err){
// 				res.status(500).send('database error').end();
// 			}else{
// 				for(var i=0;i<data.length;i++){
// 					if(data[i].username!=username){
// 						res.status(400).send('no this user').end();
// 					}else{
// 						if(data[i].password==password){
// 							res.send(data).end();
// 						}else{
// 							res.status(400).send('this password is incorrect').end();
// 						}
// 					}
// 				// 	(function(i){
// 				// 		if(data[i].username!=username){
// 				// 			res.status(400).send('no this user').end();
// 				// 			return;
// 				// 		}else{
// 				// 			if(data[i].password==password){
// 				// 				res.send(data).end();
// 				// 				console.log(data);
// 				// 				return;
// 				// 			}else{
// 				// 				res.status(400).send('this password is incorrect').end();
// 				// 				return;
// 				// 			}
// 				// 		}
// 				// 	})(i);
// 				// 	console.log(i);
// 				// 	return;
// 				}
// 			}
// 		});
// 	});
// 	return router;
// }