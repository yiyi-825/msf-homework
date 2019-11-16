# 问答题
## font 属性可以缩写哪些子属性？它们的参数各是什么，有何含义？
1. font-size:字体大小
2. font-family:字体，bold,微软雅黑之类的
3. font-weight:文字粗度，通常是默认值regular,参数在100-900
4. line-height:行高，可以用百分比


## 如何实现单行文本的垂直居中？
1. 使用line-height，然后在定义height，使他们相等
2. 行列元素用<span>

## 如何实现文本的水平居中？
1. 使用text-align:center

## 什么是 iconfont？使用它有什么优势？如何使用 iconfont？
1. 是阿里巴巴的矢量图标库
2. 优点：
   1. 方便调节大小
   2. 省流量
   3. 适合所有分辨率
   4. 清晰
3. 去iconfont官网下载，然后导入代码文件，再引用<i class="iconfont" icon-xxxx></i>
4. 或者是写它给的使用方法的示例代码。


## 文本相关的属性哪些是可以继承的？
1. text-align：对其方式left，center，right，justify
2. text-indent：文案第一行缩进距离
3. text-decoration：none，uppercase，lowercase，capitalize
4. direction：文本方向，ltr，rtl
5. word-soacing：可以改变字（单词）之间的标准间隔
6. letter-spacing：字母间隔修改的是字符或者字母之间的间隔
7. white-space：
   1. normal：多个空白符会变成一个，换行为空格
   2. pre：空白符不被忽略
   3. nowrap：防止元素中的文本换行，除非使用了一个br元素


## 什么是 CSS 边框？如何使用边框？
1. css边框是包裹在块或者行列元素这一块外边的框架
2. 使用border来定义外边的边框


# 代码题
## 请使用 border 实现四个方向的直角三角形


## 请使用 border 属性画出一个正三角形，方向不限



## 请使用 bord画出一个直角梯形，方向不限