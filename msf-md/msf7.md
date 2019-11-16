# 问答题
## 什么是外部资源？有哪些外部资源？如何引用？
1. 外部资源就是需要引入的一些图片、css、js之类的
2. 图片、css、js
3. 1. 利用src：<imag src="xxx.jpg" />
   <script type="text/javascript" src="xxx.js"></script>
3. 2. 利用href：<a href="http://www.baidu.com">百度</a>
   <link href="xxx.cs" rel="stylesheet" />


## URL 中存在哪些路径？分别是如何表示的？
1. 绝对路径：是指文件真实存在的完整路径 htpp://www.adminwang.com/index.htm
   d:/www/html/image/bg.jpg
2. 根路径：根路径一般以/开头，以同协议，同主机名为根，查找目录
   /style/main.css
   /js/main.js
   如果只想保留协议而访问不同的主机，需要以//开头
   //api.mafengshe.com/news
   //www.mafengshe.com/style.css
3. 相对路径：值要引用文件相对于当前文件的路径
   同级目录：main.html 或者 ./main.html
   上级目录：../main.html上两级../../main.html
   下级目录：next/main.html,下两级：next/next/main.html


## ../main.html，./main.html，main.html，/main.html，//www.mafengshe.com/main.html各是什么含义？有什么区别？
假设当前位置是：http://www.baidu.com/aaa/bbb
1. ../main.html：是指上一级目录的main.html,http://www.baidu.com/main.html
2. ./main.html:是指当前目录的main.html,http://www.baidu.com/aaa/main.html
3. main.html：是指http://www.baidu.com/aaa/main.html
4. /main.html：是指根路径下的http://www.baidu.com/main.html
5. //www.mafengshe.com/main.html：是指根路径下的另一个主机名的http://www.mafengshe.com/main.html

# 代码题
## 请自行创建 style.css,main.js,index.html三个文件，在index.html中引入另外两个文件。