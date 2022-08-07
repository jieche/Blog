//引用express框架
const express = require('express');
//创建网站服务器
const admin=express.Router();

admin.get('/login',(req,res)=>{
    res.render('admin/login')
});

//将路由对象作为模块成员进行导出
module.exports=admin;