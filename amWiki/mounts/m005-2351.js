if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m005']=[{"name":"01-关于mac软件","path":"005-MAC/01-关于mac软件","content":"# homebrew和homebrew cask的安装\n## 参考\n  * [参考安装方法](https://www.cnblogs.com/51fx/p/7004429.html)\n  * [homebrew和cask的一些介绍](https://blog.csdn.net/yangyangzhang1990/article/details/51578565)\n## 常用命令\n  ‘’‘\n  安装软件：brew install 软件名，例：brew install wget\n  搜索软件：brew search 软件名，例：brew search wget\n  卸载软件：brew uninstall 软件名，例：brew uninstall wget\n  更新所有软件：brew update\n  更新具体软件：brew upgrade 软件名 ，例：brew upgrade git\n  显示已安装软件：brew list\n  查看软件信息：brew info／home 软件名 ，例：brew info git ／ brew home git\n  显示包依赖：brew reps\n  显示安装的服务：brew services list\n  安装服务启动、停止、重启：brew services start/stop/restart serverName\n’‘’\n## 其他\n  * 可视化homebrew安装工具\n    ‘’‘ \n    \tbrew cask install cakebrew\n\t’‘’\n  * 图形化管理Homebrew安装的服务软件\n    ‘’‘ \n    \tbrew tap jimbojsb/launchrocket\n\t\tbrew cask install launchrocket\n\t’‘’","timestamp":1532326201488},{"name":"01-关于mac软件.md","path":"005-MAC/01-关于mac软件.md","content":"# 此页是关于mac相关软件的收集及安装\n从win7转macOS系统还是有很多操作不习惯的，尤其是安装软件这块，建立此页，目的是记录使用学习过程中的一些资料，方便后期重复查资料.\n## mac常用软件\n### 常用下载地址\n\thttp://xclient.info 有很多常用的破解软件，非常全，免费下载\n### 兼容win7类软件\n\t* 压缩软件 winrar-->keka\n\t* 流程图   Visio-->Omnigraffle 收费，网上有破解版\n\t* 办公    office for mac 微软有提供office mac版，网上有破解版\n\t* svn工具 Cornerstone 目前用到的最方便的\n\t* 虚拟机 VirtualBox 开源免费\n### 其他\n   * [一个Java程序员从Thinkpad转到Macbook](https://blog.csdn.net/yczz/article/details/49993417)\n\n## homebrew及cask\n### 参考\n  * [参考安装方法](https://www.cnblogs.com/51fx/p/7004429.html)\n  * [homebrew和cask的一些介绍](https://blog.csdn.net/yangyangzhang1990/article/details/51578565)\n  \n### 常用命令\n```\n  安装软件：brew install 软件名，例：brew install wget\n  搜索软件：brew search 软件名，例：brew search wget\n  卸载软件：brew uninstall 软件名，例：brew uninstall wget\n  更新所有软件：brew update\n  更新具体软件：brew upgrade 软件名 ，例：brew upgrade git\n  显示已安装软件：brew list\n  查看软件信息：brew info／home 软件名 ，例：brew info git ／ brew home git\n  显示包依赖：brew reps\n  显示安装的服务：brew services list\n  安装服务启动、停止、重启：brew services start/stop/restart serverName\n```\n\n### 其他\n  * 可视化homebrew安装工具<br>\n      `brew cask install cakebrew`\n  * 图形化管理Homebrew安装的服务软件<br>\n  \t`brew tap jimbojsb/launchrocket`<br>\n\t`brew cask install launchrocket`\n  * 使用brew cask安装macdown编辑器<br> \n      `brew cask install macdown`","timestamp":1532326201488}]