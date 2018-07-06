## homebrew和homebrew cask的安装
### 参考
  * [参考安装方法](https://www.cnblogs.com/51fx/p/7004429.html)
  * [homebrew和cask的一些介绍](https://blog.csdn.net/yangyangzhang1990/article/details/51578565)
### 常用命令
  ```
  安装软件：brew install 软件名，例：brew install wget
  搜索软件：brew search 软件名，例：brew search wget
  卸载软件：brew uninstall 软件名，例：brew uninstall wget
  更新所有软件：brew update
  更新具体软件：brew upgrade 软件名 ，例：brew upgrade git
  显示已安装软件：brew list
  查看软件信息：brew info／home 软件名 ，例：brew info git ／ brew home git
  显示包依赖：brew reps
  显示安装的服务：brew services list
  安装服务启动、停止、重启：brew services start/stop/restart serverName
```
### 其他
  * 可视化homebrew安装工具
    ``` 
    	brew cask install cakebrew
	```
  * 图形化管理Homebrew安装的服务软件
    ``` 
    	brew tap jimbojsb/launchrocket
		brew cask install launchrocket
	```
  * 使用brew cask安装macdown编辑器
    ``` 
      brew cask install macdown
  ```