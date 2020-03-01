# 问答题
## 有哪些浏览器存储？他们各是如何使用的？
1. cookie：用名/值对形式存储
2. web Storage:使用localStorage或者sessionStorage


## Cookie 对比 Web Storage 有何异同？
同：都可以存储浏览器数据
异：
1. cookie不适合存储大量的数据，而webStorage可以
2. 请求时不会带webStorage 的数据，但请求的时候会带上cookie


## 请分析 JavaScript 中的对象与浏览器存储之间的差异



# 代码题
1. 请实现购物车，并有完成如下特性:
    1. 可以添加物品 
    2. 可以删除物品
    3. 添加多次相同物品，会在购物车中显示添加输入量
    4. 购物车内容刷新不丢失（可以使用 Cookie 或者 Web Storage 存储）
    5. UI 部分可以自己发挥，不做强制要求