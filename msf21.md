# 问答题
## 有哪些水平居中的方法？请分别回答当元素为：行内元素，定宽块状元素时的方法和通用方法
1. 行内元素：text-align:center
2. 定宽块状元素：margin:0 auto
3. 不定块状元素：设置子元素为：display：inline；父元素为：text-align：center
4. 通用方案：flex布局，父元素设置：display：flex；justify-content：center
   







## 有哪些垂直居中的方法？
1. 父元素一定，子元素为单行内联文本：设置父元素的height=行高line-height
2. 父元素一定，子元素为多行内联文本：设置父元素的display：table-cell或者inline-block，在设置vertical-align：middle
3. 块状元素：设置子元素：position：fixed（absolute），在设置margin：auto
4. 通用方案：flex布局，再给父元素设置：display：flex；align-item：center






## 单列布局是什么？
1. 特征：定宽，水平居中
2. 一种是header，content，footer宽度相同，一般不会占满浏览器的最宽宽度，但当浏览器宽度缩小低于最大宽度时，宽度会自适应
3. 一种是header，footer宽度为浏览器宽度，但content以及header和footer里的内容却不会占满浏览器宽度






## css 中允许负 margin 吗？什么时候需要使用负 margin？
允许，当需要实现三列或者双列排布的时候使用，margin：-100%就可以将第二行元素移到第一行元素的对应位置







# 代码题
# 请使用3中方法使 .item 完全居中（水平且垂直居中），文档结构如下
<div class="container">
 <div class="item">
 this is item
 </div>
</div>





# 请使用传统方法实现圣杯布局



# 请使用 flex 布局实现圣杯布局
