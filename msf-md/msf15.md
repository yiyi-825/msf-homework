# 问答题
## 什么是盒模型？如何在 chrome 中调试盒模型？
1. 盒模型是指所有元素都生成一个矩形，该矩形由元素的内容，内边距，边框，外边距组成
2. 右键检查


## 标准盒模型和 IE 盒模型有什么区别？我们如何手动设置使用哪一种盒模型？
1. 标准的盒模型的width，height是指的content的宽与高，而IE盒模型指的是border包括padding的宽与高
2. 设置box-sizing:默认值是content就是标准盒模型，如果设置为border-box就是IE盒模型



## padding,margin分别是什么含义？合法值可以有几个？各是什么含义？
1. padding是指的内边距，合法值有四个，padding-top上内边距，padding-buttom下内边距，padding-left左内边距，padding-right右内边距
2. margin指的外边距，margin-top上外边距margin-buttom下外边距，margin-left左外边距，margin-right右外边距


## line-height 和 padding 有什么异同？
1. 同：都可以控制文本与边框的上下距离
2. 异：padding可以控制上下左右留出文本与边框的空白，lin-height只能控制上下距离，且对于多行文本，line-height会作用两遍，但是padding不会


## 什么是外边距合并？哪些情况下会发生外边距合并？如何避免？
1. 当两个垂直外边距相遇的时候，它们会形成一个外边距，合并后的外边距的高度等于两个发生合并的外边距的高度的较大者
2. 1. 兄弟元素：当两个垂直外边距相遇的时候
   2. 父子元素：当一个元素包含在另一个元素中的时候
   3. 空元素：假设有一个空元素，它有外边距，但是没有边框填充，上边框与下边框就合并在了一起。
3. 避免：
   1. 触发BFCoverflow-hidden
   2. 或者改成padding
   3. 给空元素添加内容


## 对于块元素，如何实现水平居中？
text-align：center（只有文字居中）
margin：0 auto （盒子居中）


## 对于块元素，如何实现垂直居中？
1. 用line-height实现垂直居中（水平且垂直的时候仔细考虑）
2. 使用div变成列块，然后在定义高度并且使height=1/3的height外边


# 代码题
## 请使用 line-height 实现垂直居中
https://github.com/yiyi-825/msf-homework/blob/master/msf15-1.html

## 请实现完全居中（水平且垂直居中）
https://github.com/yiyi-825/msf-homework/blob/master/msf15-2.html