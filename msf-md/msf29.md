# 问答题
## 创建对象有几种方式？最常用的是那种？
1. person= new Object();
   preson.age=56;
   preson.hair=black;
2. 最常用： person={age:56,hair:black}


## 如何使用对象构造器？对象构造器和函数有什么关系？
1. function Preson(age,hair){
    this.age=age;
    this.hair=hair;
   }
   var myFather=new Person(56,hair)
2. 对象构造器的本质就是一个函数


## 如何遍历所有的对象属性？
1. 使用for......in
   例如;var preson={age:56,hair:black};
   for (x in preson){
       console.log(x,preson(x))
   }


# 代码题
## 对于以下对象，请实现输出对象中所有字段名称和其对应的值
var person={fname:"Bill",lname:"Gates",age:56};

答：var person={fname:"Bill",lname:"Gates",age:56};
    Object.getOwnPropertyNames(preson);
    for (x in person){
        console.log(x,person(x))
    }