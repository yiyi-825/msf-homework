# 问答题

## 有哪几种选择器？请举出每种选择器中你认为最典型的使用例子
1. 基础选择器
 #id1{
     color:red
 }
 <div>
 <p id="id1">p1</p1>
 </div>

2. 组合选择器
E~F:
<style>
    #id~p{
        border: 1px solid red
    }
</style>
<body>
    <div>
        <p id="id1">p1</p>
        <div>d1</div>
        <p class="cls1 cls2">p2</p>
        <p>p3</p3>
    </div>
</body>



3. 属性选择器
[attr]:
<head>
    <style>
        [disabled]{
            border: 1px solid red
        }
    </style>
</head>
<body>
    <input type="text" value="aaa" disabled>
</body>



4. 伪类选择器
hover:
<head>
    <style>
        p.cls1:hover{
            color:red
        }
    </style>
</head>
<body>
    <p class="cls1 cls2">p2</p>
</body>



5. 伪元素选择器
<head>
    <style>
        p:before{
            content:'a'
        }
    </style>
</head>
<body>
    <p id="id1">p1</p>
</body>




## .cls1 可以选择 <div class="cls1 cls2"></div>吗？为什么？
不能，因为需要写上div.cls1，要满足EF选择器


## CSS 优先级从高到底是什么样的？请给出的代码证明
1. 在属性后面使用 ！important会覆盖页面内任何位置定义的元素样式
2. 作为style属性写在元素标签的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器自定义
10. 
    1. 通用选择器特殊性为0，计算特殊性可忽略
    2. 如果两个规则的特殊性相同，那么后定义的规则可言忽略
    3. ！important用于声明重要声明
    4. 内联样式优先级最高
    5. id选择器高于class选择器

11. 实例：
<style>
    .text{color: red;}
    p{color: black;}
    </style>
<p class="text">Text</p>

## CSS 选择器特殊度是如何计算的？以下特殊度各是什么？

1. 如果是多个选择器复合，就需要计算权重
2. 如果样式是行内样式，那么a=1
3. b：ID选择器总数
4. c:类、伪类选择器的数量
5. d：元素选择器和伪元素选择器
6. 将a.b.c.d组成的一串数字进行比较


1. #wrapper #content
答：两个id选择器为0200

2. #content .datePosted
答：一个id选择器，一个class选择器。故：0110

3. div#content
答：一个元素选择器，一个id选择器。故：0101


# 如果计算出的特殊度完全一致，谁的优先级高那？对于以下 HTML 结构，最终 <p> 显示成什么颜色？

<div id="parent">
 <p id="child" class="class1">
   Text
 </p>
</div>
#parent p.class1 {
 color: red
}
div #child.class1 {
 color: blue
}
 
答：最终会显示blue




## 如果是如下 css 那？
p {color: yellow}
p {color: green}

答：会显示green


# 代码题
1. 完成 CSS Diner 中32个练习，提交通过全部题目的截图




2. 完成 hover 下拉，效果如下

