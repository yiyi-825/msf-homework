# 问答题
## 什么是事件绑定？我们为什么需要它？
1. 在事件发生之前，我们需要制定事件的响应函数。这个过程就是事件绑定
2. 方便调用


## 有哪三种方法绑定事件？
1. 元素事件属性：通过配置HTML元素属性onXXXX绑定事件发生时执行的代码
   例如：<div onclick="this.innerHTML='谢谢'">请点击文本</div>
2. 使用DOM指定事件的响应函数
   <p>点击按钮执行<em>displayDate()</em>函数</p>
   <button id='mybtn'>点击这里</button>
   <script>
       document.getElementById("mybtn").onclick=display;
       function displatDate(){
        //代码块
       }
    </script>
3. 使用addEventListener
   例如：
   <p>点击按钮执行<em>displayDate()</em>函数</p>
   <button id='mybtn'>点击这里</button>
   <script>
       document.getElementById("mybtn").addEventListener("click",function(){
           document.getElementById("demo").innerHtml="hello";
       });
    </script>

## document.getElementById("eleID").onclick = onclickHandle 和 addEventListener() 绑定事件处理函数有何异同？不同之处请至少说出3点。
相同点：都可以绑定事件响应函数
不同点：
1. 直接DOM绑定，如果有两个绑定函数，那么前一个会解绑，而addEventListener不会解绑，两个都会绑定
2. 前者通过元素属性onxxxx绑定事件，而后者直接使用事件名xxxx。
3. 后者还可以设置指定事件是否要在捕获或冒泡阶段执行。


## 什么是事件对象？我们如何获取事件对象？
1. Event对象代表事件的状态
2. function displayDate(event){
    console.log(event);
   }


# 代码题
## 请实现标签页效果，样式部分可以自行发挥
代码：https://github.com/yiyi-825/msf-homework/blob/master/msf37-1.html
预览：https://yiyi-825.github.io/msf-homework/msf37-1.html

## 请实现抽奖效果，实现开始抽奖后，.award不断变化，点击停止后提示用户中奖等级备选奖项和概率如下
特等奖，1%
一等奖，10%
二等奖，30%
三等奖，40%
鼓励奖：19%
代码：https://github.com/yiyi-825/msf-homework/blob/master/msf37-2.html
预览：https://yiyi-825.github.io/msf-homework/msf37-2.html
