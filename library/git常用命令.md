# git相关

**本页用于记录git工具相关，从svn转git已有2年，基于项目组的使用习惯，大都使用sourcetree工具，除初次学习git时掌握了一些基本命令外，为便于工作基本都未积累git命令，现从win7转mac，mac版本sourcetree使用远不如命令行来的快，所以开始从新认识git，积累一些常用命令**

## sourcetree
拥有可视化界面的项目版本控制软件，适用于git项目管理
window、mac可用,它有命令行实现不了的功能，比如遴选功能，是多分支代码合并时最常用的功能。
[sourcetree使用方法](https://www.cnblogs.com/tian-xie/p/6264104.html)


## 学会如何看命令行帮助
获取学习渠道推荐两种

* 一、https://git-scm.com/book/zh/v2 官网中文教程
* 二、执行 `git --help` 得到如下命令行解释

**usage**: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

**These are common Git commands used in various situations:**

* start a working area (see also: git help tutorial)

   **clone**      Clone a repository into a new directory
   
   **init**       Create an empty Git repository or reinitialize an existing one

* work on the current change (see also: git help everyday)

   **add**        Add file contents to the index
   
   **mv**         Move or rename a file, a directory, or a symlink
   
   **reset**      Reset current HEAD to the specified state
   
   **rm**         Remove files from the working tree and from the index

* examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   
   **grep**       Print lines matching a pattern
   
   **log**        Show commit logs
   
   **show**       Show various types of objects
   
   **status**     Show the working tree status

* grow, mark and tweak your common history
* 
   **branch**     List, create, or delete branches
   
   **checkout**   Switch branches or restore working tree files
   
   **commit**     Record changes to the repository
   
   **diff**       Show changes between commits, commit and working tree, etc
   
   **merge**      Join two or more development histories together
   
   **rebase**     Reapply commits on top of another base tip
   
   **tag**        Create, list, delete or verify a tag object signed with GPG

* collaborate (see also: git help workflows)
 
   **fetch**      Download objects and refs from another repository
   
   **pull**       Fetch from and integrate with another repository or a local branch
   
   **push**       Update remote refs along with associated objects

**`'git help -a'` and `'git help -g'` list available subcommands and some
concept guides. See `'git help <command>'` or `'git help <concept>'`
to read about a specific subcommand or concept.**

如果需要了解某个参数的具体帮助，使用`git help <command>`来了解更多，比如 `git help add`

## 常用命令列表(持续完善)
* git clone http://xxxxx.git myName
* git remote -v 展示当前目录对应的远程仓库及地址
* git status 显示当前仓库状态
* git add -A 将本地仓库未暂存的文件全部暂存
* git commit -a -m "注释" 将本地库存所有暂存的文件全部提交 -a:全部 -m:提交注释
* git push 推送本地仓库到远程仓库 git push all --all:一次推送多个远程仓库
* git remote add xx http://xxx.git 将本地分支绑定远程分支 xx为别名
* git remote rm xx 删除和某个远程分支的绑定
* git push -u github master 推送别名为github的远程分支


## 本地仓库关联多个远程仓库
参考其他博客：[https://www.cnblogs.com/hongdada/p/7573923.html](https://www.cnblogs.com/hongdada/p/7573923.html)