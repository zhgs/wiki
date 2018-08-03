## 查找并删除
以查找和删除mp3为扩展的文件为例：<br>
>find / -name "*.mp3" |xargs rm -rf
>find . -name "*.mp3" |xargs rm -rf

.与/的区别 .是当前目录及子目录； /为根目录及子目录

会删除所有以mp3为扩展的文件。操作的时候先：
>find / -name "*.mp3"
>find . -name "*.mp3"

会打印出匹配的文件，如果觉得正是想删除这些文件，再执行：

>find / -name "*.mp3" |xargs rm -rf
>find . -name "*.mp3" |xargs rm -rf