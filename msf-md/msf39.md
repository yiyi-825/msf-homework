# 问答题
## BOM 是什么？提供的 API 让我们能操作什么？
1. BOM是browser object model，简称浏览器对象模型
2. BOM提供了独立与内容而与浏览器窗口进行交互的对象


## window.name 有怎样的特性
1. 用于设置当前浏览器窗口的名字
2. 当浏览器刷新之后，这个属性会保持不变。
3. 这个值可能被其它网页改写


## 如何获取窗口的尺寸？
1. 浏览器窗口内部高度：window.innerHeight
2. 浏览器窗口内部宽度：window.iinnerWidth


## 如何调整滚动条位置
1. 滚动条横向偏移：windou.scrollX
2. 纵向滚动条偏移：windou.scrollY
3. 滚动到函数：window.scrollTo(0,300)
4. 相对于当前位置滚动：window.scrollBy(0,100)

## 如何获取浏览器相关信息
1. window对象的navigator属性，指向一个包含浏览器相关信息的对象
2. navigator.userAgent属性返回浏览器的User-Agent字符串，用来标示浏览器的种类



## 如何得到一个元素计算后的属性值
使用getComputerStyle(dom)["属性名"]

## 如何模拟点击前进后退按钮的点击？
1. 前进：history.forward()
2. 后退：history.back
