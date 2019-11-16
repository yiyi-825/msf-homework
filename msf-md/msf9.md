# 问答题
## 什么是 URL？
1. Uniform Resource Locator统一资源定位符也是网址
2. URL可以由单词组成或者是IP地址
3. 遵守以下的语法规则：scheme://host:port/path/filename


## URL 有哪些常见的 Schemes？他们各是什么含义？
1. http：超文本传输协议，以这个开头的普通网页不加密
2. https：安全超文本传输协议，安全网页，加密所有信息交换
3. ftp：文件传输协议，用于将文件下载或者上传至网站
4. file：计算机上边的文件


## URL 有哪些约束？
1. 只能使用ASCII字符集在互联网进行发送
2. 中文不可以在URL中表示
3. URL中不支持空格，会用+或者20%来表示


## 请将以下 URL 转换成合法的 URL :  baidu.com/s?wd=码蜂社 前端
https://www.baidu.com/s?tn=80035161_2_dg&wd=baidu.com%2Fs%3Fwd%3D%E7%A0%81%E8%9C%82%E7%A4%BE+%E5%89%8D%E7%AB%AF


## 请提取以下 URL 的 scheme，host，port，path，filename:  https://www.mafengshe.com/course/fe-senior/ad：  http://127.0.0.1:3000/course/fe-senior/ad
1. scheme：https  host：mafengshe port:80 path:course/fe-senior/ad  filename:ad
2. scheme:http  host:127.0.0.1 port:80 path:course/fe-senior/ad
  filename:ad