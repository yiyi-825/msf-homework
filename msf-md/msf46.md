# 问答题
## js中对象的属性查找机制是什么？请写出实现属性查找机制的伪代码
1. 首先查找自身属性，如果没有，是顺着__proto__不断向上查找，直到查到null为止
2. 代码：
   
   findProperty(obj,property){
       if(obj.hasOwnProperty(property)){
           return obj[property]
       }
       var __proto__=obj.__proto__
       while(__proto__){
           if(__proto__.hasOwnProperty(property)){
               return __proto__[property]
           }
           __proto__=__proto__.__proto__
       }
   }



## 自学ES5的 Object.create() 函数，然后用自己的代码重新实现

Object.prototype.myCreate=function(proto){
    function Fn(){}
    Fn.prototype=proto;
    return new Fn();
}


## 使用原型链实现继承，本质通过改变对象的什么，来实现继承？
实际上改变的是对象的prototype.__proto__属性
例如：Book.prototype.__proto__=Goods.prototype


## 当我们使用new关键字，其背后干了哪些事？
1. 调用call函数创建新的对象并且赋值
2. 改变了__proto__的指向
3. 代码：
   var book=new Book{"book1","Tom","1"}
等价于
    var book=Book.call{
        {}
        "Book1"
        "Tom"
        "1"
    }
    book.__proto__=Book.prototypr


## 讲义中使用 Book.prototype = new Goods() 实现继承有什么不完美的地方？
1. 属性有多份
2. 无法给Goods传参数，因为参数只有在调用时才知道


## 画出代码题1的原型图，需要画到null




# 代码题 n。Animal 有方法 eat,sleep;Dog,Cat有方法bark；Human有方法speak；请使用js中的继承实现。
