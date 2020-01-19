# 问答题
## 当父元素设置为 display: flex 时，子元素的摆放方式更像 display: block 还是 display: inline？请解释为什么。
更像display：inline，因为flex布局中block元素默认在同一行中布局




## flexbox 有哪两个轴？他们的方向可以改变吗？如果可以改变，通过设置什么属性可以改变？
1. main axis主轴，cross axis交叉轴
2. 可以改变，通过flex-direction改变主轴的方向，交叉轴永远垂直于主轴，从而交叉轴的方向也可以改变
3. 通过设置direction属性：row|row-reverse|column|column-reverse
   

## 有哪些属性可以设置在 container 上的？他们分别有哪些属性？分别代表什么意思
1. flex-direction：row（主轴从左往右）|row-reverse（主轴从右往左）|column（主轴从上往下）|column-reverse（主轴从下往上）
2. flex-wrap：no-wrap（不换行）|wrap（换行）|wrap-reverse（从下往上）
3. flex-flow：direction与wrap混合，默认值为row nowrap
4. justify-content：flex-start（默认值左对齐）|flex-end（右对齐）|center（居中）|space-between（两端对齐，中间间隔相等）|space-around（每个项目两侧间隔相等，所以项目之间的间隔比项目与边框间隔大一倍）
5. align-items：flex-start（交叉轴起对齐）|flex-end（交叉轴末对齐）|center（交叉轴中对齐）|stretch（如果项目未设置高度或者为auto，则占满整个高度）|baseline（项目第一行文字对齐）
6. align-content：flex-start（交叉轴起对齐）|flex-end（交叉轴末对齐）|center（交叉轴中对齐）|stretch（如果项目未设置高度或者为auto，则占满整个高度）|baseline（项目第一行文字对齐）
   







## 有哪些属性可以设置在 item 上的？他们分别有哪些属性？分别代表什么意思 
1. order:定义项目的排列顺序，默认之为0
2. flex-grow:定义项目的放大比例，默认值为0，存在剩余空间也不放大
3. flex-shrink:项目按比例缩小
4. flex-basis:在分配多余空间之前，项目占据主轴空间
5. aligin-self:允许单个项目与其他项目有不一样的对齐方式






## 如何使用 flex 实现完全居中
可以使用justify-content：center实现主轴方向上居中，然后用align-content实现垂直轴上的居中






## 如何使用 flex 实现 列表（从左往右排布，可以多行，最后一行左对齐）
其他都是flex-start默认，最后一行的那几个项目设置成align-self：flex-end就可以设置成最后一行，并且它默认是左对齐，所以最后一行就左对齐了。





# 代码题
## 请使用 flex 实现圣杯布局，注意：圣杯布局要求优先加载中间部分的内容







## 请完成 骰子的布局骰子的一面，最多可以放置9个点。请使用 flex 布局完成 骰子 1-6 点的排布