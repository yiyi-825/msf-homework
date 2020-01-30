# 问答题
## 什么是媒体查询？我们可以使用媒体查询完成哪些功能？
1. 媒体查询允许指定文件在不同媒体呈现
2. 可以使他用不同方式显示


## 响应式断点指的是什么？如何声明响应式断点？
1. 指达到某个断点时，分布式会变化
2. 使用@media only screen and (max-width:500px){
   body{
       backgorund-color:red;
   }
   }类似的句型来声明短点


## 通常响应式布局在宽度较小的屏幕上采取折行策略，使用 flex 布局时，我们通常使用哪个属性实现折行？
使用[class*="col"]{
    width:100%
}
例如：
@media only screen and (max-width:500px){
   [class*="col"]{
    width:100%
}
}
# 代码题
## 请分别使用 float 布局和 flex 布局，实现 col-1 至 col-12 的响应式布局，响应式断点为 768px




## 请实现这个导航条效果，注意：html 结构可以改变，不得使用 bootstrap 库实现，需自己手写全部样式。自行改变浏览器大小，观察 nav 的响应式变化。
