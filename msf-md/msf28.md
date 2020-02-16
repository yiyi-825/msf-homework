# 问答题
## 为什么会有函数？函数有什么用？
1. 函数是由事件驱动的，当它被调用时执行的可重复使用的代码块，因为需要使用相同的功能块
2. 方便我们调用一个重复的功能，或者方便修改被用于许多不同地方的相同功能块


## 有哪几种声明函数的方式？最常用的是哪些？
1. var myFun=new Function("a","b","renturn a*b");
2. 最常用：function functionName(){statement;}


## 声明是函数返回值？如何设置函数返回值？如何获得函数返回值？
1. 不是
2. 需要在函数体中，或者在变量中给出return
3. 使用return 

## 函数中 return 后面的语句会执行吗？为什么？
不会，函数运行到return就终止了


## 声明是函数提升？为什么会有函数提升？
1. 是
2. 提升是JS默认将当前作用域提升到前面去的行为

# 代码题
## 请写出下面代码的函数提升以后的等价代码
1. console.log(fn);
var fn = function(){}
等价于：
var fn；
console.log(fn);
fn=function(){}


2. fn(); // "1"
 function fn(){
  console.log('1');
}
等价于：
var fn;
 function fn(){
  console.log('1');
}
 fn(); // "1"
