# 问答题
## HTML5引入了哪些新标签？
1. canvas：用于绘画的元素
2. SVG：可伸缩矢量图形
3. video、audio：用于媒介回放
4. article、footer、header、nav、section：内容元素
5. calendar、date、time、email、URL、search：表单控件


## Canvas是什么？它能干什么？
它是HTML5可以使用JS在网页上绘制图像的元素，canvas拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法


## SVG 是什么？它能干什么？它和 Canvas 有什么区别？
1. SVG指可伸缩矢量图形
2. 用于定义用于网格的基于矢量的图像
3. 是可伸缩的
4. 可以在任何分辨率下被高质量的打印
5. 可在图像质量不下降的情况被放大
6. canvas的图形质量会随着分辨率增高而降低但是svg不会


## 如何在网页上播放视频、音频？
1. video：可以播放视频例如：<video width="320" height="240" controls>
<source src="网址" type="video/mp4/">
</video>

2. audio：可以播放音频例如：<audio  controls>
<source src="网址" your browser does not support this audio format>
</audio>


## HTML5引入了哪些结构性元素？他们各有哪些含义？
1. article：代表文档、页面或者应用程序中独立的、完整的、可以独自被外部引用的内容，与上下文不相关的独立内容
2. section：元素代表页面的一个内容区块，比如张杰、页眉、页脚等，不要为没有标题的内容区块使用section
3. nav：表示页面导航链接的部分
4. aside：表示article内容之外的、与article元素的内容相关的辅助信息，例如侧边栏、导航条、广告等等区别于主要内容的部分
5. header：表示页面中一个内容区块或者整个页面的标题
6. hgroup：将标题及其子标题进行分组的元素
7. footer：表示整个页面或者页面中一个内容区块的脚注
8. figure：表示一段独立的流内容，一般表示文档主体流内容的一个独立单元，使用figcaption元素为figure元素组添加标题



## 如果网页发生乱码，我们应该检查什么？具体该怎么做？
应该检查保存的编码格式，将保存的编码格式与浏览器解析时的解码格式相匹配


## 请写出一个包含乱码的网页，并合理设置字符集编码，使得它可以正常显示




## 在哪里查浏览器对标签或属性的支持程度? 请查询<video>标签的浏览器兼容性，并截图
CAN I USE