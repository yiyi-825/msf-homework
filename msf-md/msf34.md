# 问答题
## 什么是 Dom？为什么要用 Dom？
1. 文件对象模型
2. 因为通过可编程的对象模型，JS有足够的能力去创建动态的HTML


## Dom 有哪些常见属性？
1. doctype：HTML文档声明
2. head，body
3. activeElement：焦点元素
4. title，characterSet：返回渲染当前文档的字符集
5. cookie：存储在客户端的文本
6. innerText：是一个可写属性，返回元素内包含的文本内容，多层次会按照由浅到深的顺序拼接其内容
7. innerHTML，outerHTML:返回元素的HTML结构，在写入时会自动构建DOM



## 如何设置 Cookie？
docunment.Cookie


## innerText 和 innerHTML 有什么异同？
innerText只返回文本，innerHTML返回文本结构


## innerHTML 和 outerHTML 有什么不同？
innerHTML得到的是文本内的框架，outerHTML得到的是当前全部文本的框架


## 我们可以使用 document.write() 动态生成文档流吗？如何可以，如何操作？
可以，document.writer(“<div>test</div>”)


## 在什么时候，document.write() 会重写文档流？
在使用docunmen.open()使用之后，还没有使用docunmen.close()之前。同时要在文档渲染完成之后，不然open不会执行就不能重写


# 代码题
## 请使用 JavaScript 动态生成以下文档
<ul>
 <li>1</li>
 <li>2</li>
 <li>3</li>
</ul>

答：
<body>
    <scritp>
        setTimeout(function(){
            document.open()
            document.writer("<ul><li>1</li><li>2</li><li>3</li></ul>")
        },1000)
    </script>
</body>