# 问答题
## JavaScript 中有哪些基本类型？
1. 数值（number）
2. 字符串(string)
3. boolean
4. object
5. undefined
6. null


## 如何声明并初始化字符串类型的变量？" 和 ' 声明字符串有什么不同的应用场景？
1. var answer="dsdfds"或者var answer='saffhweif'
2. ""  ''里边都可以放入字符串，但当字符串本身包含引号的时候，要合理使用''或者“”避开


## JavaScript 数值类型的变量支持科学计数法表示吗？如果能，如何表示？
1. 支持
2. var y=123e5


## Infinity 是什么类型？什么时候会得到 Infinity？
1. 表示无穷
2. 当数值小于最小值5e-324，大于1.786932348623157e+308时数字会被转换为Infinity，用isfinite可以判断数字是否为无穷



## NaN 是什么类型？它表示什么意思？
表示非数字，NaN和任何值都不相等，包括自己

## JavaScript 中布尔（boolean）类型的变量有哪两个合法值？分别代表什么意思？
有true和false，表示判断是否正确


## JavaScript 中如何声明对象（狭义的对象）？
var person={firstname:"Bill",lastname:"Gates",id:2323}



## 原始类型可以看做是广义的对象吗？可以调用 toString() 方法吗？
1. 可以，所有的数据都可以视为广义的对象，原始类型也可以
2. 可以使用对象方式调用


## 新建数组有几种方法？最常用的是哪种方法？
1. var mycars=new Array()
   mycars[0]="sd"
   mycars[1]="sdf"
   mycars[2]="sdg"
   
2. var mycars=new Array("sd","sdf","sdg")
3.最常用： var mycars=["sd","sdf","sdg"]


## 任何数据类型如何转化为字符串？
var bFound=false;
bFound.toString();




## 最常用的最简单的将任意类型转化为 Number 的方法是什么？
1. 通常会使用parseInt(),parseFloat().例如： var iNum1=parseInt("1245");
2. 最简单的方法是 var str="5.1";var num=+str;



## typeof 可以查看哪些类型变量的类型，可以区分 Array ，Function 和 Object 类型吗？如果不能，我们该使用什么办法区分？
1. typeof 返回值有六种可能： "number," "string," "boolean," "object," "function" ,"undefined."以及'symbol' 。
2. 不可以，array和object返回值都是object，function返回类型是function
3. var arr=[];
console.log(arr instanceof Array) //返回true。这样可以判断arr是不是array，是则返回true

## null 和 undefined 有什么区别？
1. null空值，代表一个空对象指针，是关键字
2. undefined类型，表示声明了变量，但是没有赋值，是全局变量



# 代码题
# 请将下面变量转化为 Number，并回答其对应的 Number 值是多少
1. "1.0"：对应的是1
2. "2"：2
3. "str"：NaN
4. true：1
5. []:0
6. [1, 2, 3]：NaN
7. {}：NaN
8. {a:1}：NaN
9. function(){}：NaN


## 请将下面变量转化为 Boolean，并回答其对应的 Number 值是什么
1. "1"：true
2. "str":true
3. 1:true
4. 0:false
5. []:true
6. [1, 2, 3]:true
7. {}:true
8. {a:1}:true
9. function(){} :true


## 请初始化一个变量 obj，它拥有以下几个字段
var obj={a:"1",b:""2"",c:"true"}
