# 问答题
## 程序语言中有哪三种控制结构？请用文字描述，并画图示意。
1. 顺序结构 
2. 条件结构类似于if....else语句，当条件为true时执行代码，否则条件为false时执行其他代码
3. 循环结构，有循环的情况出现

## if ... else ... 语句的含义是什么？
当条件为true时执行代码，否则条件为false时执行其他代码


## 当 if 或是 else 子句只有一行代码时，我们可以省略代码块（{}）吗？如果可以省略我们应该通过什么办法使代码可读性增加
可以，让单个if或者else语句占一行，还可以使用注释


## if 语句支持嵌套吗？如何使用嵌套？
支持，在else里边嵌套if....else

## 对于比较复杂的嵌套我们可以写成如下形式，请谈谈为什么可以写成这种形式
if()
  ...
else if()
  ...
else
  ...

答：因为可以看成多个if…else的组合，不损失功能同时又简化的代码，增强了美观性和可读性。




## 对于多个分支的分支语句我们可以用 switch 语句，switch 语句的结构是什么样的？
switch(d){
    case 0:
    console.log("今天是星期日")
    break;
     case 1:
    console.log("今天是星期一")
    break;
     case 2:
    console.log("今天是星期二")
    break;
     case 3:
    console.log("今天是星期三")
    break;
     case 4:
    console.log("今天是星期四")
    break;
     case 5:
    console.log("今天是星期五")
    break;
     case 6:
    console.log("今天是星期六")
    break;
    
}


## 对于 switch 语句的每一个子句，我们需要使用 break 吗？为什么？
需要，如果不使用break，那么会接着运行下去，直到运行完或者break


## switch 语句可以使用哪种数据结构替代？请给出实例代码。
可以使用数组代替
arr=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
d=2;
"今天是"+arr[d];//输出会是“今天是星期二”



## 对于需要多次执行的相同或者类似的代码，我们应该使用什么样的控制结构？它一共有几种形式？请给出示例代码。
1. 使用循环结构
2. for(语句1;语句2;语句3){
   代码块
   }
3. while循环
   while(条件){
       代码块
   }
4. do{
   代码块
   }
   while(条件)；
5. break,continue语句




## 对于 for(语句1; 语句2; 语句3) 语句，语句1，语句2, 语句3 含义是什么？他们各是在什么时候执行？
1. 语句1：赋值，语句2：判断；语句3：操作
2. 先执行语句一，再执行语句三，最后语句二判断。如果为true就执行命令行



## for(var i in obj) 含义是什么？如何使用？
变量i是对象obj中的变量，为obj[i]
例如：for(var i in obj)
        {
            txt+=x+":"+obj[x]+"\n"
        }
    console.log{txt}



# 代码题
## 请填写如下函数，使得当 flag 为 true 时，函数返回 1；否则返回0
function func(flag){
 // 请在这里填写代码

}
答：
function func(flag){
 if(flag=true)
 return 1;
 else
 return 0;

}

## 请实现顺序遍历数组，发现数组元素为 5 时终止遍历。如数组 [0, 1, 2, 3, 4, 5, 6]，应该遍历 [0, 1, 2, 3, 4]
var arr=[0,1,2,3,4,5,6];
for(i=0;i<5;i++){
    console.log(arr[i]);
}


## 请实现顺序遍历数组，发现数组元素为 5 时跳过。如数组 [0, 1, 2, 3, 4, 5, 6]，应该遍历 [0, 1, 2, 3, 4, 6]
var arr=[0,1,2,3,4,5,6];
for(i=0;i<=arr.length;i++){
    if(i!=5)
    console.log(arr[i]);
    else
    break;
}


## 已知数组 [0, 1, 2, 3, 4, 5, 6]，请实现代码将映射为 ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
var arr=[0,1,2,3,4,5,6];
switch(arr[d]){
    case 0:
    console.log("星期日")
    break;
     case 1:
    console.log("星期一")
    break;
     case 2:
    console.log("星期二")
    break;
     case 3:
    console.log("星期三")
    break;
     case 4:
    console.log("星期四")
    break;
     case 5:
    console.log("星期五")
    break;
     case 6:
    console.log("星期六")
    break;
}