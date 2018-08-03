## 发布wiki
  * cd 到D:\pro_tuniu\study_project\amwiki
  * 右击，选择git bash，进入到git bash操作窗口
  * 输入amwiki -u 更新本地的wiki文档
  * 使用sourcetree，将本地的变更推送到github中


## 发布blog

* 新建博客文章，可以使用以下命令，会自动创建一个带同名的文件夹，用于存放图片

	```hexo new post "博客文章标题"```
		
* 编辑文章后，发布：cd进入hexo目录
* 执行命令,执行过程中会要求输入ssh密钥@nixxxx09x

	```hexo g -d```
* 执行完成后会自动发布到blog的库存中，同时源文件备份要手动提交到另外一个github库存中
* 发布blog 自动提交git时可能会失败或超时，原因是本地git缓存过小，修改/Users/zhouguangsheng/Documents/个人文档/github博客/hexo/.git/config文件，增加如下内容,即把提交缓存扩大到500m

	```[http]```<br>
	```postBuffer = 524288000```