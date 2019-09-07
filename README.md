# zjy'homework
# Visual studio code 常用功能说明
## 常用快捷键
### 编辑器与窗口管理
1. 打开一个新窗口： Ctrl+Shift+N
2. 关闭窗口： Ctrl+Shift+W
3. 同时打开多个编辑器（查看多个文件）
4. 新建文件 Ctrl+N
5. 文件之间切换 Ctrl+Tab
6. 切出一个新的编辑器（最多 3 个） Ctrl+\，也可以按住 Ctrl 鼠标点击 Explorer 里的文件名
7. 左中右 3 个编辑器的快捷键 Ctrl+1 Ctrl+2 Ctrl+3
8. 编辑器换位置， Ctrl+k然后按 Left或 Right
### 格式调整
1. 代码行缩进 Ctrl+[ 、 Ctrl+]
2. Ctrl+C 、 Ctrl+V 复制或剪切当前行/当前选中内容
3. 代码格式化： Shift+Alt+F，或 Ctrl+Shift+P 后输入 format code
4. 上下移动一行： Alt+Up 或 Alt+Down
5. 向上向下复制一行： Shift+Alt+Up 或 Shift+Alt+Down
6. 在当前行下边插入一行 Ctrl+Enter
7. 在当前行上方插入一行 Ctrl+Shift+Enter
### 光标相关
1. 移动到行首： Home
2. 移动到行尾： End
3. 移动到文件结尾： Ctrl+End
4. 移动到文件开头： Ctrl+Home
5. 移动到定义处： F12
6. 定义处缩略图：只看一眼而不跳转过去 Alt+F12
7. 移动到后半个括号： Ctrl+Shift+]
8. 选择从光标到行尾： Shift+End
9. 选择从行首到光标处： Shift+Home
10. 删除光标右侧的所有字： Ctrl+Delete
11. 扩展/缩小选取范围： Shift+Alt+Left 和 Shift+Alt+Right
12. 多行编辑(列编辑)：Alt+Shift+鼠标左键，Ctrl+Alt+Down/Up
13. 同时选中所有匹配： Ctrl+Shift+L
14. Ctrl+D 下一个匹配的也被选中 (在 sublime 中是删除当前行，后面自定义快键键中，设置与 Ctrl+Shift+K 互换了)
15. 回退上一个光标操作： Ctrl+U
    
## 插件安装与卸载
1. 在Enstension里边下载所需插件
2. 若下载失败可以手动下载安装包然后安装
3. 卸载可以直接点解插件的uninstall

## 如何将vs code与git联用
1. 注册GitHub账号
2. 创建一个库
3. 在桌面创建一个文件夹，用vs code打开并保存
4. 编写文件
5. 点击terminal选择new terminal
6. 在终端中输入 git init对终端初始化
7. 输入git status查看文件状态，发现文件夹里边有两个文件名且都为红色
8. 输入git add xxx.html xxxx.wxml将文件夹的文件添加到库中
9. 再次输入git status查看文件的状态，发现文件夹里边有两个文件名且都为绿色，说明已经将文件添加到了库中。
10. 输入git commit -m 'xxx'，此处引号内的名称可以为任意。
11. 由于第一次使用git，在上一步中会报错，这时我们只需输入git config --global user.name 'GitHub账户名'运行后再输入git config --global user.email '注册GitHub时的邮箱'即可。
12. 再次输入git status查看文件状态，发现工作树为空，则说明上述操作成功。
13. 输入git branch查看目前文件所在的分支为master
14. 下面讲述如何将文件远程提交到GitHub，打开自己刚刚在GitHub上新建的库，点击Clone or download，再将地址复制下来。
15. 在VS Code中继续输入git remote add origin +地址，，最后的地址为刚刚在GitHub上复制的地址。
16. 输入git push -u origin master，运行后我们会发现报错，这是因为没有将库中的README.md文件下载下来，这时我们只需输入git pull --rebase origin master，执行结束后我们会发现左侧文件夹中多了一个文件
17. 这时我们再执行git push -u origin master，执行结束后文件就已经成功提交到GitHub。
18. 这些也可以在git bash里边进行
