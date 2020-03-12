# 问答题
## 什么是类，类有什么用？
类是对某一类对象的抽象，是用户自定义的一种引用数据类型，用于模块化和封装



## js中如何声明类，
使用function关键字，类似于声明一个函数一样声明一个类



## 构造函数允许返回自定义对象吗？如果 return 返回自定义对象会怎么样？
允许，会默认返回新生成的对象



## 使用 this 赋值成员方法和使用 prototype 声明成员方法的区别是什么？
this赋值的成员方法是静态绑定，而prototype声名成员方法是动态绑定



## 请自学js中实现继承的方法，并说说js实现继承的本质是什么？
1. Per.prototype=new Person()
2. function Con(){
   Preson.call(this,"per")
   this.age=12
   }
3. 继承的本质是改变__proto__属性的指向


## 常见的设计模式有哪些？请说出至少5个
1. 工厂模式
2. 单例模式
3. 模块模式
4. 代理模式
5. 命令模式




# 代码题
## 请实现 BackTop 这个类，实现点击回到顶部的效果，外部只需要使用如下调用方式即可。
   var ele = $(".back-top")
   new BackTop(ele);
代码：
 <script>
        function BackTop($node){
            var timer
            $node.on("click",function(){
                window.scrollTo(0,0)
            })

            window.onscroll=function(){
            console.log("onscroll")
            clearTimeout(timer)
            timer=setTimeout(function(){
                var windowH=$(window).height()
                var scrollTop=$(window).scrollTop()
                if(scrollTop>windowH*0.5){
                    $node.addClass("show")
                }
                if(scrollTop<windowH*0.5){
                    $node.removeClass("show")
                }
            },50)
        }
       
        }
    </script>


## 请手动实现 instanceOf(obj,Clazz) 函数，其行为和js元素提供的 obj instanceof Clazz一致


## 请动手实现工厂模式



## 请动手实现单例模式


## 请自学js中实现继承的方法，并实现如下的类的继承关系：人和狗都继承自动物类，动物类有吃和睡两个方法，人和狗对吃和睡都有自己的实现。
代码：
    <script>
        function Animal(name){
            this.name=name
        }
        Animal.prototype.eat=function(){
            return "I could eat"
        }
        Animal.prototype.sleep=function(){
            return "I can sleep"
        }
        function Dog(name){
            Animal.call(this,name)
            this.name=name
        }
        Dog.prototype=Object.create(Animal.prototype)
        Dog.prototype.bark=function(){
            return "汪汪汪！"
        }
        function Cat(name){
            Animal.call(this,name)
            this.name=name
        }
        Cat.prototype=Object.create(Animal.prototype)
        Cat.prototype.bark=function(){
            return "喵喵喵！"
        }
        function Human(name){
            Animal.call(this,name)
            this.name=name
        }
        Human.prototype=Object.create(Animal.prototype)
        Human.prototype.speak=function(){
            return "I can speak Chinese"
        }

        var catLily=new Cat("Lily")
        console.log(catLily.bark())
        var dogTom=new Dog("Tom")
        console.log(dogTom.bark())
        var humanAnn=new Human("Ann")
        console.log(humanAnn.speak())

    </script>
