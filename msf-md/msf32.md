# 问答题
## 什么是错误处理？为什么要错误处理？
在执行JS 时会发生的错误，要解决错误


## 常见的错误有哪些？
语法错误，拼写错误，浏览器差异，服务器、用户出错 


## 能用 if 语句替代错误处理吗？如果能，请给出实例代码，如果不能，请说明原因（开放题）
能
var a=可能出错的代码;
if(!a){
    console.log(err)
}
## 如何抛出一个错误？
try{
    throw new Error("a test err")
}catch(err){
    console.log(err)
}


## 以下代码可以捕获异常吗？为什么？
function a(){
 throw new Error("An error")
}
function b(){
 a();
}
try{
 b()
}catch(err){
 console.log(err)
}




## finally 子句有什么用？
可以让try，catch执行完之后执行，可以防止catch里边有return然后后边的代码没执行。



## JavaScript 中 throw 可以抛出非 Error 类型的异常吗？请动手试试
可以


## try catch 语句可以嵌套吗？ 如何嵌套？
可以
try{
    throw new Error("a test err")
}catch(err){
    try{
    throw new Error("a test err")
        }catch(err){
            console.log(err)
             }
        
}


# 代码题
## 请构造一段会产生异常的代码（注意：不是一定会产生，是有一定概率产生异常），然后使用异常处理机制处理它



## 以下代码能不能正常捕获异常，如果不能请分析原因并修改代码使其可以正常捕获异常
function asyncTask(){
 setTimeout(function(){
   throw new Error("An error")
 },1000)
}
try{
 asyncTask()
} catch(err){
 console.log(err)
}
答：不能

