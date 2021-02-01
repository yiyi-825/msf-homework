# 问答题
## 了解什么是域
假设当前显示页面地址为 http://bbs.mafengshe.com/a/b.html
http://bbs.mafengshe.com/a/b/c.html 
http://bbs.mafengshe.com/a.html 
http://bbs.mafengshe.com/pic.png
https://bbs.mafengshe.com/a/b.html 
http://bbs.mafengshe.com:81/a/b.html
http://work.mafengshe.com/a/b.html 
http://mafengshe.com/a/b/c.html 
file:///a/b.html 

答：
1. 出于安全考虑，浏览器同源策略会限制来自不同的域名、协议、端口（不同的域）资源之间的访问。这个时候我们就需要跨域访问其他不同域上服务器的资源。另外如果协议或者端口的不同，前端JS是无法实现跨域访问的，需要后台实现
2. 
    1. http://bbs.mafengshe.com/a/b/c.html ：成功
    2. http://bbs.mafengshe.com/a.html ：成功
    3. http://bbs.mafengshe.com/pic.png ：成功 
    4. https://bbs.mafengshe.com/a/b.html ：失败，不同协议
    5. http://bbs.mafengshe.com:81/a/b.html ：失败，不同端口
    6. http://work.mafengshe.com/a/b.html ：失败，不同域名
    7. http://mafengshe.com/a/b/c.html  ：成功
    8. file:///a/b.html ：成功

## 是什么原因造成直接跨域访问失败？
浏览器同源策略
   


## 跨域有哪几种方法？他们的原理各是什么？各有什么局限性？（如果有的话）
1. 使用document.domain更改源。 
   1. 原理：可以通过document.domain设置当前域的值为自身或者当前域的父级，设置成父域后，较短的域将用于后续的检查
   2. 局限性：赋值时必须带上端口号，两个网页主域名必须是一致的
2. 使用document.name存储信息
   1. 原理：window对象有个name属性，这个属性在window的生命周期内，窗口载入的所有页面都共享一个window.name，每个页面对window.name都有读写的权限。可以通过这个属性在不同iframe间传递信息。
   2. 局限性：
3. JSON（CORS）实现跨域
   1. JSON可以传输一个字符串对象
   2. 局限性：
4. JSON实现跨域
   1. 利用src实现跨域，使用callback回调函数来传递参数
   2. 局限性：只能使用src比较麻烦


## 需要回答四种跨域方法
1. 使用document.domain更改源。 
2. 使用document.name存储信息
3. JSON（CORS）实现跨域
4. JSON实现跨域


## 本地如何模拟跨域访问？请演示并截图



# 代码题
## 代码实现使用CORS实现跨域用户注册？（后端使用 Express）不需要实现数据库操作，注册成功时后端返回{errno:0,errmsg:"",data:{}}当提交用户名为 mafengshe 时，注册失败返回{errno:1,errmsg:"用户名已经存在",data:{}}需要在github上提交代码，然后把链接附在答案后面


