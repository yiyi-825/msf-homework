# 问答题
## CSS 中颜色有几种表示方法？RGB 表示法参数为数值和百分数时分别为什么意思？RGBA 表示法中 A 参数表示什么意思，取值范围是什么？
1. 有三种表示方法：函数式RGB表示法，函数式RGBA表示法，十六进制RGB颜色
2. 百分数表示三种色值的百分比的叠加，0%最暗，100%最亮参数为数值表示分别代表的颜色的叠加范围在0-255，0最暗，255最亮
3. A参数表示RBG颜色值Alpha通道的延伸-被指定对象的透明度，Alpha参数是一个介于0.0（完全透明）-1.0（完全不透明）之间的参数


## 什么是前景色，什么是背景色？
前景色就是需要显示在字体之类的颜色，背景色就是屏幕这一块的background需要显示的颜色


## background 属性可以缩写哪些子属性(如:background-color)？他们的参数各是什么，有何含义？
1. background-attachment:背景图像是否固定或者随着页面的其余部分滚动。参数：fixed：表示是否随着滚动
2. background-color：设置元素的背景颜色。参数：#fff：表示颜色
3. background-image：把图像设置为背景色：url（xxxxx.gif）：表示图片的来源
4. background-position：设置背景图像的起始位置，默认在左上角。x，y表示x，y为左上角的坐标，x%，y%表示中心点的重合位置，[top|center|bottom][left|center|righ]也表示左上角的位置。
5. background-repeat：设置背景图片是否重复：no-repeat：背景图片在规定位置，repeat-x：图片横向重复，repeat-y：图片纵向重复，repeat：全部重复
6. background-size：设置背景图片的尺寸：length：（50px，50px）表示设置背景图片的高度和宽度，如果只设置一个值，另一个值会被auto。precentage：用百分数表示与length类似。cover：扩大背景图至覆盖整个背景。contain：扩大图片至最大，使其适应内容区域
   



## 同时指定 background-color 和 background-image 时会怎么样？请分各种情况讨论
1. color写在image前面，可以得到两者并存的效果
2. color写在image后边，image不生效，color生效


## background-position 可以写哪几种参数？他们的含义是什么？
background-position：设置背景图像的起始位置，默认在左上角。x，y表示x，y为左上角的坐标，x%，y%指的是中心点的重合位置，[top|center|bottom][left|center|righ]也表示左上角的位置。


## 什么是雪碧图？为什么要使用雪碧图？雪碧图的实现原理是什么？
1. 雪碧图运用在有许多小图标的网站上，用一张组合图片的不同位置代替许多的小图片
2. 优点：只需要请求加载一次就可以下载全部资源，减小建立连接的消耗
3. 原理：将网站需要用到的图片整合到一张图片中，减小网站的HTTP请求数量


## 现代前端中为什么很少使用雪碧图了？有哪些替代方案？相比之下有何好处？
1. http2会自动将许多不同的同一名下的请求分装到一块去
2. 有打包工具会自动的把图片打包到HTML里边去
3. 用户滑到哪里在加载相应的资源
4. 现代前端的优化比用雪碧图更方便



# 代码题
## 请使用雪碧图实现一个按钮，当鼠标 hover 时，切换图片。