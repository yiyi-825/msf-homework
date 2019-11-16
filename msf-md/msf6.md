# 问答题 

## 什么是 iframe?
iframe也是html的一个标签，不过不是往页面上添加一个元素，而是iframe会创建包含另一个文档的内联框架


## 如何在当前页面中嵌入其他页面？
用iframe的src嵌入另一个页面的连接
例如：
<iframe src="./frames/inner.html" width="500" height="600" frameborder="1" >
</iframe>

## iframe 有哪些常见应用？
1. frameborder：可以规定是否显示框架周围的边框
2. width：可以规定边框宽的大小
3. height：规定边框高的大小
4. src：引入的资源

## 如何使用 <a> 标签控制 iframe 中显示的内容？
<a href="http......." target="iframe1">新浪</a>
<iframe name="iframe1" src="http.......1"></iframe>
这样点击新浪然后iframe1的网页就会跳转到新浪这个网页


## 为什么越来越少的人使用 iframe？
1. 因为iframe很好识别、太好屏蔽了，所以大家使用iframe越来越少了
2. 技术不太完善，嵌套会有点混乱

## frame 和 iframe 有什么区别？
1. frame不能脱离frameset单独使用，iframe可以
2. frame不能放在body里边，不能正常显示在body里边
3. frame的高度只能用frameset控制，iframe可以自己调节。


# 代码题
请实现一个类似 gitbook 的左边点击右边局部刷新的效果