# 问答题
## 有哪些方法可以创建字符串？我们最常用哪一种方法？
1. Str=new String("ddd")
2. Str = String("ddd")
3. Str="ddd"

## 如果需要将字符串折行，可以使用什么办法？
在一行的最后边加上\，换行就\n

## 如果使用双引号声明字符串，而字符串中又存在 " 这时该怎么办？
在双引号前边加一个\


## split() 函数有什么用？它的返回值是什么？
将其分割，返回是数组，split(",",3);表示按，分割，一共选三个


## 如何查询字符串中的子串所在位置？
1. 使用indexOf(),从字符串的开头开始查找，找到还返回对应坐标，找不到返回-1
2. lastindexOf():从字符串的末尾开始查找，找到还返回对应坐标，找不到返回-1


## slice()，substring()，substr() 函数用法有什么不同？
1. slice(a,b)，从0开始计数，a-b不包括b
2. substring()与slice()用法基本一样，但是slice的a，b可以是负的，而substring不行
3. substring()与substr()不同的是substr(a,b)b代表截取的字符串的最大长度


## 字符串是如何比较的？一个字符串比另外一个大表示什么？
1. 字符串的比较是按照字母表顺序来的
例如：var mystr="chi";
var mystrTwo="egg";
var result=mystr.localCompare(mystrTwo);
最后result=-1
2. 一个字符串比另一个大，表示这个字符串与另一个字符串相比，对他们第一个不相同的字母而言这个字符串的那个字母顺序要大于另外一个


# 代码题
## 请实现：输入文件名，返回文件后缀名
function getSyffix(file){
    return file.slice(file.lastIndexOf("".)+1,file.length);
}


## 请实现：输入任意英文语句，将单词首字母大写。如输入：I miss you，返回I Miss You
var myStr="I miss you";
var upCaseStr=myStr.toUpperCase();