# 问答题
## setTimeout 或者 setInterval 设置定时器是准时触发的吗？为什么？如果不是，他可能延时触发还是延后触发？
如下代码 setInterval 设置的定时器激活间隔为多少？为什么？
setInterval(function(){
  for(var i=0;i<1000*1000*1000;i++);//假设这行代码运行需要100ms
},1000)

答：2不是准时触发，只可能推迟，间隔时间为1s







## 如下代码的输出是什么？为什么？
setTimeout(function(){
  console.log(1);
},0)
console.log(2);

答：输出为2，1因为JS是单线程的，所有setTimeout执行完之后会执行后边的代码，即使延迟时间为0，还是会执行完后边的代码再执行这个函数




## 如下代码执行结果是什么？请解释原因
var t = true;

window.setTimeout(function (){
   t = false;
},1000);
while (t){}
alert('end');

答：执行结果无，不会弹出end，因为while会一直循环








## 我们会在很多代码里看到如下语句，请说明在什么场景下需要使用如下形式代码
setTimeout(function(){
  // balala
  // 这里有很多代码
  // balala
},0)

答：需要在所有代码执行完之后执行setTimeout的内容




# 代码题
## 请用 setTimeout 模拟实现 setInterval，并说明你实现的函数和系统自带的 setInterval 有什么不同
答：ID不固定，难以取消。因时间间隔不确定，可能会影响下一事件的执行。


function mySetInterval(fun,millisec){
    setTimeout(function(){
        fun()
        mySetInterval(fun,millisec)
    },millisec)

}
