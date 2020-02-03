# 问答题
## 如何定义渐变的起始状态和终止状态？
1. 起始状态：在trans里边定义.trans{
    transition: width 2x;
    width:200px;
   }
2. 终止状态：定义一个css属性效果，在这个效果里边添加终态的信息。例如：.trans:hover{
   width:300px;
   }


## 如何定义动画的起始状态和终止状态？
@keyframes animation-name{
    from{background:red}
    to{background:blue}
}
from后边的是起始帧，to后边的是终止状态
或者将from改为0%，to改为100%



## 请说说渐变和动画3个不同之处和3个相同之处
1. 相同：都有起始状态，终止状态，变换的css效果
2. 不同：
   1. 动画不需要触发，而渐变需要
   2. 渐变的效果只演示一遍，从起始状态到终止状态后就保持，而动画可以循环。
   3. 渐变只能设置两个状态，起始和终止，而动画可以通过百分比设置多个状态。


## 多个渐变或是动画可以嵌套吗？嵌套效果如何？
可以嵌套，嵌套后效果叠加更好



# 代码题
## 实现码蜂社官网 导航栏效果（颜色渐变效果改为 hover 时触发，下拉动画需要实现）
代码：https://github.com/yiyi-825/msf-homework/blob/master/msf22-1.html
预览：https://yiyi-825.github.io/msf-homework/msf22-1.html


## 实现这里的 loading 效果
代码：https://github.com/yiyi-825/msf-homework/blob/master/msf22-2.html
预览：https://yiyi-825.github.io/msf-homework/msf22-2.html