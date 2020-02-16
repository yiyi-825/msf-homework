# 问答题
## dom 元素常用属性有哪些？
1. nodeName:元素标签名
2. nodeType:元素类型
3. className：类名
4. id：元素id
5. children：子元素列表
6. childNodes：子元素列表（NodeList）
7. firstChild：第一个子元素
8. lastChild：最后一个子元素
9. nextSibling：下一个兄弟元素
10. previousSibling：上一个兄弟元素
11. parentNode、parentNode：父元素


## 如何查找元素？
1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. getElementsByName()
5. querySelector()
6. querySelectorAll()
7. elementFromPoint()


## 如何增/删/改/查元素？
1. 增：
   1. creatElement()：生成HTML元素节点
   2. createTextNode():生成文本节点
   3. createDocumentFragment():生成DocumentFragment对象
2. 修改：
   1. appendChild():在末尾添加一个元素
   2. insertBefore():在某个元素前添加一个元素
   3. replaceChid():有两个元素，一个替换的，另一个被替换的
3. 删除：
   1. moveChild():删除元素


## HTMLCollectioin 和 NodeList 有何异同？
相似点:
1. 都是类数组对象，都有length属性，可以通过for循环迭代
2. 都是只读的
3. 都是实时的
4. 都有item（）方法，可以通过item("id")/item(index)获取元素
不同点：
1. HTMLCollection对象具有namedItem()方法，可以传递id或name获得元素
2. HTMLCollection的item()方法和通过属性获取元素可以支持id和name，而NodeList对象只支持id



# 代码题
## 请使用 Dom 操作向<ul id="list"></ul> 中插入如下 dom
 <li>1</li>
 <li>2</li>
答：
<script>
    var temp=document.getElementById("list");
    var tempNode1=document.createElement("li");
    var tempTextNode1=document.createTextNode("1");
    tempNode1.append(tempTextNode1);
    var tempNode2=document.createElement("li");
    var tempTextNode2=document.createTextNode("2");
    tempNode2.append(tempTextNode2);
    temp.append(tempNode1);
    temp.append(tempNode2);
</script>