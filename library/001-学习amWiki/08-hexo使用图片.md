## 一、修改_config.yml
  首先确认`_config.yml` 中有 `post_asset_folder:true`。
Hexo 提供了一种更方便管理 Asset 的设定：`post_asset_folder`
当您设置`post_asset_folder`为`true`参数后，在建立文件时，Hexo
会自动建立一个与文章同名的文件夹，您可以把与该文章相关的所有资源都放到那个文件夹，如此一来，您便可以更方便的使用资源。


## 二、安装hexo-asset-image
在hexo的目录下执行
	
	npm install https://github.com/CodeFalling/hexo-asset-image --save
需要等待一段时间，
完成安装后用hexo新建文章的时候会发现_posts目录下面会多出一个和文章名字一样的文件夹。图片就可以放在文件夹下面。

## 使用方法
只要使用 `![logo](本地图片测试/logo.jpg)` 就可以插入图片。其中[]里面不写文字则没有图片标题

## 说明
使用此方法必须满足hexo为3.0以上版本