# 问答题
## 请解释元字符的含义，.,\w,\s,\d,\b,^,$，其中前四个需要写出与之等价的字符类。
1. . :匹配除换行符以外的任意字符 :[^\n]
2. \w ：匹配字母或数字或下划线或者汉字 :[a-zA-Z0-9_\u4e00-\u9fa5]
3. \s ：匹配任意的空白符、包括空格、制表符Tab、换行符、中文全角空格等 :[ \f\n\r\t\v]
4. \d ：匹配数字:[0-9]
5. \b ：匹配单词的开始或者结束
6. ^ ：匹配字符串的开始
7. $ ：匹配字符串的结束


## 什么是分组，分组有什么用？
1. 在重复中说明了如何匹配重复的单个字符，但分组可以对多个字符重复
2. 可以对多个字符重复



## 什么是零宽断言，请写出一个使用零宽断言的例子
1. 零宽：不占字符，用于指定位置。
2. 断言:判断表达式是否成功
3. 零宽字符：不占字符，但能决定是否匹配成功(?=exp),!表示取非，不带<都是预感断言，带<表示回顾断言
4. 例如：


## 贪婪与非贪婪匹配有什么不同？请各给出一个例子
1. 贪婪：正则表达式的默认行为是尽可能匹配多的字符
   例如：console.log("aabab".math(/a.*b/))
2. 非贪婪模式：在重复词后添加？来开启懒惰模式
   例如：console.log("aabab".math(/a.*?b/))


# 代码题
## 请写出能匹配如下数的正则表达式
1. 整数 ：^-?[1-9]\d*$
2. 非负浮点数 : ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$
3. 正浮点数:^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$
4. 非正浮点数:-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)|0?\.0+|0
5. 负浮点数:-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*
6. 浮点数:-?([1-9]\d*\.\d*|0\.\d[1-9]\d*|0?\.0+|0)


## 请写出可以检查用户名的正则表达式，要求如下
1. 其长度为8-16个字符
2. 以字母开头
3. 可以包含数字、下划线
   答：[a-zA-Z]\w{7.15}


## 请写出可以匹配所有合法电子邮箱的正则表达式
/^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i


## 请写出可以检查是否是合法网址的url(可以是http协议或者https协议)
^(http://|https://)?((?:[A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)[/\?\:]?.*$



## 请完成checkPassword(str)这个函数，这个函数可以检查用户输入的密码是否合法，以下是密码要求
1. 6-16个字符
2. 首字符为字母或者下划线
3. 应该包括小写字母，大写字母，数字，下划线中的至少3个
4. 不能包括其他特殊字符

    <script>
        function checkPassword(str){
            if(str.length<6){
                return "密码长度应大于6个字符"
            }
            if(str.length>16){
                return "密码长度应小于16个字符"
            }
            if(/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/g.test(str)){
                return "首字符为字母或者下划线,应该包括小写字母，大写字母，数字，下划线,不能包括其他特殊字符"
            }
            var sum=0
            if(/[a-z]/g.test(str)) sum++
            if(/[A-Z]/g.test(str)) sum++
            if(/[0-9]/g.test(str)) sum++
            if(/_/g.test(str)) sum++
            if(sum<3){
                return "应该包括小写字母，大写字母，数字，下划线中的至少3个"
            }
            else{
                return true
            }
        }
    </script>



## 请使用正则表达式实现jQuery中的addClass和removeClass。这里做简化，只需要实现add/removeClass(str,clazz)，其返回值为可以作为元素的class属性的string。下面给出两个例子
addClass("nav container-wrapper","fixed") // return "nav container-wrapper fixed"
removeClass("nav container-wrapper","container-wrapper") // return "nav"



代码：
        function addClass(str,clazz){
            var reg=new RegExp(""+clazz+"")
            if(reg.test(str)){
                return str
            }
            else return str+""+reg
        }

        function removeClass(str,clazz){
            var reg=new RegExp(""+clazz+"")
            if(!reg.test(str)){
                return str
            }
            else return str.replace(/s/g,"")
        }






## 已知获取了部分html（截取自码蜂社官网，为minify以后的代码），完成函数getInfo(html)。
1. 输入HTML:
2. 函数输出
[
   {title:"单线程模型与定时器",teacher:"Mark",during:"1.5h"},
   {title:"ES6 基础",teacher:"Mark",during:"1.5h"},
   {title:"Vue.js 2.0 入门指南",teacher:"Mark",during:"1.5h"},
   {title:"Node.js 入门指南",teacher:"Mark",during:"1.5h"},
   {title:"CSS 常见技巧",teacher:"Mark",during:"1.5h"},
   {title:"HTML边角知识",teacher:"Mark",during:"1.5h"}
]

代码：
        function getInfo(html){
            var titleList=[]
            var teacherList=[]
            var timeList=[]
            var titleReg=/<h4.*?>(.*?)<\/h4>/g
            var teacherReg=/导师：<!\-\-.*?><!\-\-.*?>(.*g)<!\-\-.*?>/g
            var timeReg=/时长：<!\-\-.*?><!\-\-.*?>(.*?)<!\-\-.*?>/g
            var htmlList=html.split("</div>")
            var outputList=[]
            for(var i=0;i<htmlList.length;i++){
                if(htmlList[i].match(titleReg))
                titleList[titleList.length]=htmlList[i].match(titleReg)[1]

                if(htmlList[i].match(teacherReg))
                teacherList[teacherList.length]=htmlList[i].match(teacherReg)[1]
                
                if(htmlList[i].match(timeReg))
                timeList[timeList.length]=htmlList[i].match(timeReg)[1]
                
            }
            for(var i=0;i<titleList.length;i++){
                var infoObj=new Object()
                infoObj.title=titleList[i]
                infoObj.teacher=teacherList[i]
                infoObj.time=timeList[i]
                outputList[outputList.length]=infoObj
            }
            return outputList
        }

