//引用express框架
const express = require('express');
//创建网站服务器
const home=express.Router();

home.get('/',(req,res)=>{
    res.send('欢迎来到博客浏览页面')
});

//将路由对象作为模块成员进行导出
module.exports=home;