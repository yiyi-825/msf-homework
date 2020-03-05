# 问答题
## AJAX 是什么的简称？它和普通的 HTTP 请求有什么不同？
1. Asynchronous JavaScript and XML
2. 他使用的是异步请求


## 传统网页的渲染模式和基于 AJAX 的网页渲染模式有何不同
传统网页渲染需要刷新页面，但是AJAX网页渲染不需要刷新页面等待了

## 如何模拟调试 AJAX 的数据
使用node.js搭建简易后端来实现Mock数据


## 如何兼容老浏览器创建 XMLHttpRequest 对象？
使用
catch(e){
    try{
        xhr=new ActiveXObject("Msml2.XMLHTTP")
    }
    catch(e){
        try{
            xhr=new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
}


## XMLHttpRequest 对象有哪几个常用方法？分别对应的含义如何？
1. xhr.open('get/post','地址',true):true是异步，这个是获得数据
2. xhr.send()：传输数据


## 常见的 HTTP 请求头有哪些？如何使用 AJAX 设置 HTTP 请求头？
1. Accept:浏览器可以处理的内容类型
2. Accept-Charset：浏览器可以处理的字符集
3. Accept-Encodeing：浏览器能够处理的压缩编码
4. Accept-Language：浏览器当前设置的语言
5. Connection：浏览器与服务器的连接类型
6. Cookie：当前页面的cookie
7. Referer：发送请求的页面的url


## 如何使用 AJAX 发起 POST 请求？
xhr.open('post','地址',true)
    xhr.send()




# 代码题
## 请使用 AJAX 在自己的网页获取数据，并将数据以你喜欢的方法展现出来（可以渲染 dom，可以打印 console）可以通过 GET learning-api.mafengshe.com/news 获得数据（后端已经添加跨域返回头），该地址支持如下几个参数
