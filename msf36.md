# 问答题
## 什么是 Canvas？Canvas 能干那些事？
1. canvas元素使用JS在网页上绘制图像
2. canvas拥有多种绘制路径。矩形、圆形、字符以及添加图像的方法


## 画笔颜色，填充颜色各如何设置？
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";


## Canvas 中如何画圆？如何填充圆？
画圆：
ctx.beginPath();
ctx.arc(x,y,radius,startAngle,endAngle[,anticlockwise]);
ctx.closePath();
填充圆：
cxt.fillStyle="#FF0000";

## Canvas 如何改变坐标系的位置和单位长度？
改变坐标系位置：translate(x,y)：x轴朝右，y轴朝下
改变单位长度：scale(x,y)：值为正值，比1.0小为缩小

# 代码题
## 请使用 Canvas 绘制钟表，并可以动态显示当前时间
