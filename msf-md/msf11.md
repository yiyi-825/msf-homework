# 问答题

## 什么是 CSS？它有什么优势？
1. CSS指层叠样式表
2. 它可以：
   2.1 定义如何显示HTML元素
   2.2 解决内容与表现分离的问题
   2.3 极大提高工作效率
   2.4 将多重样式层叠为一个
   
## 内部样式表和外部样式表各是如何声明和使用？
1. 内部样式表：
   <head>
   <style type="text/css">
   h2 {color:blue;}
   </head>
   <body>
   <h2 style="color: yellow">内部样式</h2>
   <h2>内部样式</h2>
   </body>
2. 外部样式表：
   <head>
   <link rel="stylesheet" type="text/css" href="style.css">
   </head>
   <body>
   <h2>外部样式</h2>
   <body>


## 多层样式层叠是什么意思？
样式表允许以多种方式规定样式信息。样式可以规定在端个的HTML元素中，在HTML页的投缘苏中，或者在一个外部的css文件中，甚至可以在同一个HTML文档内部引用多个外部样式表。

## 什么是优先级？样式表的优先级排序是什么？

1. 优先级是当运行时有不同的定义的时候，选择优先级高的哪一项的定义运行


2. 选择器优先级：
通常我们可以将CSS的优先级由高到低分为六组：

　　1、无条件优先的属性只需要在属性后面使用 !important 。它会覆盖页面内任何位置定义的元素样式。IE 6不支持这个属性；
　　2、第二高位的优先属性是在html中给元素标签加style。由于该方法会造成CSS的难以管理，所以不推荐使用。
　　3、第三级优先的属性是由一个或多个id选择器来定义的。例如 #id{margin:0;} 会覆盖 .classname{margin:3px;}。
　　4、第四级的属性由一个或多个 类选择器、属性选择器、伪类选择器定义。如 .classname{margin:3px;} 会覆盖 div{margin:6px;}
　　5、第五级由一个或多个 类型选择器定义。如 div{margin:6px;}  覆盖  *{margin:10px;} 。
　　最低一级的选择器是为一个通配选择器，用*{margin:10px;}这样的类型来定义。

　　另外，可以用一句极为简单的话来描述CSS优先级问题：当一个CSS选择器拥有更多的高级别属性时，它的优先级就会比较高。如 #i100
　　*.c20 *.c10{} 的优先级就会高于 #i100 *.c10 div p span em{}
　　，这是由于前者拥有一个第三级和两个第四级的选择器而后者第三级和第四级的选择器各为一个，当然前者优先级会比较高。

3. 相同级别的优先级：
当比较多个相同级别的CSS选择器优先级时，它们定义的位置将决定一切。下面从位置上将CSS优先级由高到低分为六级：

　　1、位于<head/>标签里的<style/>中所定义的CSS拥有最高级的优先权。
　　2、第二级的优先属性由位于 <style/>标签中的 @import 引入样式表所定义。
　　3、第三级的优先属性由<link/>标签所引入的样式表定义。
　　4、第四级的优先属性由<link/>标签所引入的样式表内的 @import 导入样式表定义。
　　5、第五级优先的样式由用户设定。
　　最低级的优先权由浏览器默认。

## 请解释 CSS 如下概念
1. 选择器：选择需要应用样式的元素对象
   

2. 属性：CSS1,CSS2,CSS3规定了许多属性，通过设置属性的值达到控制选择器的样式的目的


3. 值：指属性接受的设置值/关键字，一个属性的值要么是关键字，要么是一个关键字表。如果一个属性可以取多个关键字，则多个关键字大多以空格隔开


4. 声明：属性和值之间用半角冒号：隔开，形成一条声明


5. 声明块：多个特性间用：隔开，前后用{}括起来形成一个声明块


## CSS 中回车符(\n)会影响 CSS 的解析吗？请测试在不同位置下的回车符对解析的影响，然后谈谈你的理解
会，回车符会变成空格，title，或者p标签都会变成空格，即使很多回车都会变成一个空格


## CSS 代码中如何使用注释？
1. 多行注释： /*safdfsdgs
  dsfsdfhsjhdsjgs*/
2. 单行注释： /*fyfyf*/


## 浏览器前缀是什么？我们为什么需要浏览器前缀？
1. 前缀是写在一些不被浏览器支持的属性前面的东西，可以让这些属性被浏览器支持
2. 因为 一些新式的CSS样式并不是所有的浏览器都支持，一些浏览器率先支持了，或者不是所有浏览器的支持情况都一样，我们需要前缀写法
3. FireFox：-moz-
   Safari/Chrome:-webkit-
   Opera:-o-
   IE:-ms-


## 对浏览器前缀的处理有哪些方案？其中较好处理方案是哪个？
1. 每次写完
2. 根据需求去CANIUSE查是否需要写完
3. 用CSS预处理器（最好的）



## CSS 缩写是什么？哪些属性支持缩写？
1. 使用CSS缩写可以减少CSS文件的大小，并使其更易读
2. 颜色缩写：16进制的色彩值，如果每两位的值相同可以进行缩写
3. 盒尺寸缩写
4. 边框缩写
5. 背景缩写
6. 文字缩写


## 什么是 CSS 中的继承？哪些属性可以继承？如果不希望子元素继承父元素的某个属性该怎么办？
1. 继承：某些样式不仅能应用到指定的元素，还会应用到它的后代元素
2. 文本相关：font-family,font-size,font-style,font-variant,font-weight,font,letter-spacing,line-height,text-aligin,text-indent,texttransform,word-spacing
3. 列表相关：list-style-image,list-style-positin,list-style-type,list-style
4. color属性
5. 创建一个针对p的特殊的原则


## 以下代码<h2>最终显示成什么颜色？为什么？
<!DOCTYPE html>
<html>

<head>
<style type="text/css">
  body{
    color: yellow;
  }
</style>
</head>

<body>
<h2>标题</h2>
</body>

</html>

答：黄色,因为之前声明了color是黄色



# 代码题
以下代码中<h2>最终显示成什么颜色？如果我想让color: red，在不修改内部和外部样式表的前提下，该如何实现？
index.html
<!DOCTYPE html>
<html>

<head>
 <link rel="stylesheet" type="text/css" href="style.css">
 <style type="text/css">
   body{
     color: yellow;
   }
   h2 {
     color: blue;
   }
 </style>
</head>

<body>
 <h2>标题</h2>
</body>

</html>
style.css
h2 {
 color: green
}

答：显示蓝色,改变h2的内联样式表
html:https://github.com/yiyi-825/msf-homework/blob/master/msf11.html
css:https://github.com/yiyi-825/msf-homework/blob/master/style11.css