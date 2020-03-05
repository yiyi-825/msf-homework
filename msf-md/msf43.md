# 问答题
## JavaScript 有哪些常用的标准对象？
1. Math对象
2. Date
3. JSON


## Math 对象有哪些常用方法和常量？
1. 常量：
   1. E：算术常量e，自然对数的底
   2. LN2：返回2 的自然对数
   3. LN10：返回10 的自然对数
   4. LOG2E：返回以2为底的e的对数
   5. LOG10E：返回以10为底的e的对数
   6. PI：返回圆周率
   7. SQRT1_2:返回2 的平方根的倒数
   8. SQRT2:返回2 的平方根
2. 方法：
   1. abs(x)：返回数的绝对值
   2. acos(x)：返回数的反余弦值
   3. asin(x)：返回数的反正弦值
   4. atan(x)：以介于-PI/2与PI/2弧度之间的数值来返回x的反正切值
   5. atan2(y,x)：返回从x轴到(x,y)的角度（介于-PI/2与PI/2之间）
   6. ceil(X)：对数进行上舍入
   7. cos(x)：返回数的余弦
   8. exp(X)：返回e的指数
   9. floor(x)：对数进行下舍入
   10. log(X)：返回数的自然对数（底为e）
   11. max(x,y)：返回x和y中最大值
   12. min(x,y)：返回x和y中最小值
   13. pow(x,y)：返回x的y次幂
   14. random()：返回0-1之间的随机数
   15. round(x)：把数四舍五入为最接近的整数
   16. sin(X)：返回数的正弦
   17. sqrt(X)：返回数的平方根
   18. tan(X)：返回角的正切
   19. toSource(x)：返回该对象的源代码
   20. valueOf()：返回Math对象的原始值



## 如何获取当前时间？如何根据需要构建 Date 对象？
1. 构建：var myDate=new Date()
2. 获取当前时间
   function twoDigtal(num){
       var str=num.toString()
       while(str.length<2){
           str="0"+str
       }
       return str
   }
   function format(date){
       var year=date.getFullYear()
       var month=date.getMonth()
       var day=data.getDate()

       var hour=date.getHours()
       var min=date.getMinutes()
       var sec=date.getSeconds()

       return twoDigtal(year)+ "-" +twoDigtal(month)+ "-" +twoDigtal(day)+ "-" +twoDigtal(hour)+ "-" +twoDigtal(min)+ "-" +twoDigtal(sec) 
   }


## 什么是 JSON？JSON 在 JavaScript 中是什么数据类型？在网页构建的过程中，我们常用 JSON 来干什么？
1. JSON是字符串
2. 字符串类型
3. 主要用来序列化和反序列化JS对象


## 如何将 JSON 转化为 JavaScript 中的 Object？
1. 使用JSON.parse(text[,reviver])
2. text:要被解析成JS值的字符串
3. reviver：如果是一个函数，则规定了原始值在返回前如何被解析


## 如何将 JavaScript 中的 Object 转化为 JSON ？
1. 使用JSON.stringfy(value[,replacer[,space]])
2. value:将要序列化成JSON字符串的值
3. replacer可选：如果该参数是一个函数，则在序列化过程中，被序列化的每个属性都会经过该函数的转换和处理。如果是一个数组，则只有包含在这个数组中的属性名才会序列化到最终的JSON字符串中，如果参数是null或者未提供，则对象所有的属性都会被序列化
4. space可选：指定缩进用的空白字符串，用于美化输出，如果参数是控股，它代表有多少空格



# 代码题
## 请构造一个 Date 对象，它表示的时间为 2017-03-05 10:03:08

  var myDate = new Date()
            myDate.setFullYear(2017)
            myDate.setMonth(2)
            myDate.setDate(5)
            myDate.setHours(10)
            myDate.setMinutes(3)
            myDate.setSeconds(8)


## 请实现函数 isInCircle(x,y) 实现给定二维平面上点 P 的坐标 (x,y) ，函数返回点 P 是否在标准圆（半径为 1 的圆）内。 在标准圆内，返回 true,不在标准圆内，返回 false
    <script>
        function isInCircle(x,y){
            var m=Math.sqrt(x*x+y*y)-1
            if(m>0){
                return "点p(x,y)在圆外"
            }
            else if(m=0){
                return "点p(x,y)在圆上"
            }

            else if(m<0){
                return "点p(x,y)在圆内"
            }
        }
        isInCircle(0.5,0.3)
        isInCircle(5,8)
        isInCircle(1,1)

    </script>