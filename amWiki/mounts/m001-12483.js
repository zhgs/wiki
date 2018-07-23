if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"01-amWiki轻文库简介.md","path":"001-学习amWiki/01-amWiki轻文库简介.md","content":"# amWiki 轻文库简介\n\n![amWiki logo](https://amwiki.xf09.net/docs/assets/logo.png)  \namWiki 是一款基于 Javascript 脚本语言、依赖 Atom 编辑器、使用 Markdown 标记语法的轻量级开源 wiki 文库系统。  \namWiki 致力于让大家可以更简单、更便捷的建设个人和团队文库系统！  \n\n[[view amWiki on Github](https://github.com/TevinLi/amWiki)]\n[[view amWiki](http://amwiki.org/doc/)]\n\nGitHub:  \n[![](https://img.shields.io/github/stars/TevinLi/amWiki.svg?style=social&label=Star)](https://github.com/TevinLi/amWiki \"GitHub Stars\")\n[![](https://img.shields.io/github/forks/TevinLi/amWiki.svg?style=social&label=Fork)](https://github.com/TevinLi/amWiki \"GitHub Forks\")\n[![](https://img.shields.io/github/issues-raw/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Open Issues\")\n[![](https://img.shields.io/github/issues-closed-raw/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Closed Issues\")\n[![](https://img.shields.io/github/contributors/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Contributors\")  \nApm:  \n[![apm](https://img.shields.io/apm/v/amWiki.svg)](https://atom.io/packages/amWiki \"Apm Version\")\n[![apm](https://img.shields.io/apm/dm/amWiki.svg)](https://atom.io/packages/amWiki \"Apm Downloads\")\n[![apm](https://img.shields.io/apm/l/amWiki.svg)](https://atom.io/packages/amWiki \"MIT License\")  \n\n## amWiki 优势\n- 文档系统采用 Markdown 语法 [>>Markdown 快速开始](?file=001-学习amWiki/05-学习markdown/01-Markdown快速开始)\n- 无需服务端开发，只需支持 http 访问的静态网页空间\n- 不使用数据库，使用 `.md` 扩展名存储文档为本地文件\n- 一键创建新文库，自动生成一套 Html 页面\n- 自动更新文库导航目录\n- 支持截图直接粘帖为本地 png 并插入当前 Markdown 文档\n- Web 端页面自适应显示，适合各种 Web 平台与屏幕尺寸\n- 支持接口文档自动抓取内容生成简单的 Ajax 测试\n- ... (更多内容期待您的发现)\n\n## 效果演示\n**Web端**  \n一键创建新文库默认生成Web端效果一览：[https://tevinli.github.io/amWiki/](https://tevinli.github.io/amWiki/index.html)  \n\n**工作端**  \n工作端需要您安装 Atom 与 amWiki 才能体验\n","timestamp":1532329480213},{"name":"02-amWiki功能导图.md","path":"001-学习amWiki/02-amWiki功能导图.md","content":"# amWiki 功能导图\n\n![amWiki功能导图](https://amwiki.xf09.net/docs/assets/mapping.png)  \n\n**说明**：灰色文字代表的功能部分，表示目前版本没有，但是已经列入开发计划\n","timestamp":1532329480213},{"name":"03-如何开始一个新amWiki轻文库.md","path":"001-学习amWiki/03-如何开始一个新amWiki轻文库.md","content":"# 如何开始一个新 amWiki 轻文库\n\n## 开始一个新文库的步骤\n\n1. ##### 下载 Github 出品的开源文本编辑器 [Atom](https://atom.io/ \"打开Atom官网\")，并安装  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/02-0e63f48d.png)\n\n2. ##### 安装 Atom 完成之后，再安装插件 amWiki，您可以通过以下三种途径安装：\n    - 【方式一】：通过 Atom 菜单，File -> Setting -> Install -> 搜索 `amWiki`  \n      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-ec2b10b3.png)  \n      <br>\n    - 【方式二】：运行：`apm install amWiki`  \n      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-37a29814.png)  \n      <br>\n    - 【方式三】：从Github的 [amWiki版本发布](https://github.com/TevinLi/amWiki/releases) 下载zip，(windows)解压到 `C:\\Users\\Administrator\\.atom\\packages`，并将文件夹名 `amWiki-x.x.x` 改为 `amWiki`\n\n3. ##### 重启 Atom (必须)\n\n4. ##### 在本地您需要创建文库的位置创建一个文件夹 (非 Atom 编辑器中)\n\n5. ##### 在 Atom 中 `Add Project Folder` (添加项目文件夹)，并指向刚创建的文件夹\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/03-7ce48bba.png)\n\n6. ##### 在 Atom 刚创建的项目下新建 `config.json` 文件，并按 json 格式配置以下属性：\n    - **name**，您的文库名称，设置但为空或不设置将显示默认名\n    - **ver**，文本版本号或维护者名号，设置但为空将不显示，注意诺不设置此属性将显示 amWiki 作者\n    - **logo**，logo 的 url，设置但为空或不设置将显示默认 logo\n    - **colour**，自定义颜色，默认为蓝色\n    - **testing**，是否启用接口测试模块，默认值 false  \n    - 例如：\n    ```javascript\n    {\n        \"name\": \"A3项目文档中心\",\n        \"ver\": \"\",\n        \"logo\": \"http://abc.com/logo.jpg\",\n        \"testing\": true\n    }\n    ```\n7. ##### 保持 `config.json` 处于当前打开状态，在 Atom 菜单点击：\n\n    amWiki文库 -> 通过“config.json”创建新文库  \n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-78f2030d.png)\n\n8. ##### 此时项目中自动创建了许多内容，其中 library 文件夹即为您的文库文件夹\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-d72e59a9.png)\n\n9. ##### 使用 `F12` 启动本地静态服务器，访问刚刚自动创建的 index.html\n\n\n## 文库目录结构\n项目目录自动生创建的内容如下\n\n    index.html                 // http 访问入口页面\n    amWiki/                    // amWiki Web 端程序文件夹\n    library/                   // 您的 Markdown 文库目录，所有文件必须使用 .md 格式\n       ├ $navigation.md        // amWiki 文库目录导航文件，可自动/手动更新\n       ├ 首页.md                // Web 端打开页面时页面页面默认显示的内容\n       ├ 001-学习amWiki/        // Markdown 文件夹01\n       │   ├ 001-关于amWiki     // 一些 Markdown 文档，支持二级目录\n       │   └ 002-...\n       ├ 002-文档示范/          // Markdown 文件夹02\n       │   ├ 001-通用api        // 一些 Markdown 文档，支持二级目录\n       │   └ 002-...\n       └ 003-...               // 更多 Markdown 文件夹\n    (assetes/)                 // 如果您粘帖截图，图片文件将自动创建在此处\n\n\n## 如何使用\n一键创建新文库后，您可以通过以下方式开始 amWiki 文库之旅：\n\n1. 在 Atom 编辑器中使用快捷键 `F12` 或在浏览器中使用 http 访问刚刚创建的 index.html。\n2. PC 端使用左侧导航栏、移动端使用右上角弹出菜单来切换页面。\n3. 在导航栏顶部，可以使用筛选功能通过输入关键词对整个导航目录进行筛选。\n4. 如果存在页内目录，直接点击，页内目录使用 hash 滚动；同时您可以直接带 hash 分享，以方便他人快速浏览指定内容。\n","timestamp":1532329480213},{"name":"04-如何编辑amWiki轻文库.md","path":"001-学习amWiki/04-如何编辑amWiki轻文库.md","content":"# 如何编辑 amWiki 轻文库\n\n文库创建后，您就可以编辑自己的文库了\n\n## 基本编辑\n\n1. ##### 新建文件或文件夹，组织您自己的文库  \n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-88742d4f.png)\n\n2. ##### 每个文件夹或文件要求使用 `id-名称.md` 来命名，其中：\n\n   1. id 仅允许 **整数** 或 **浮点数** 类型，且 **不可重复**\n   2. 必须使用连 **接符** 或 **下划线** 将 id 与后续具体名称相连\n   3. 文件只能使用 **.md** 扩展名  \n\n   如果未能满足以上条件，将弹出以下错误提示：  \n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-4801dadd.png)  \n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-79e0b528.png)  \n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-0c4d9e7d.png)  \n   正确的命名，例如：  \n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-12e1b01c.png)  \n\n3. ##### 使用 Markdown 语法编辑您的文档\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b3be9411.png)\n\n## 扩展编辑\n\n1. ##### library 文件夹下 `首页.md` 文档为默认打开时的显示内容\n   您可以适当修改此文档内容以符合您的项目需求  \n\n5. ##### `$navigation.md` 导航文件无需人工维护，创建新文件夹或文件时将自动更新，也可以在菜单栏手动刷新：\n\n    菜单栏 -> amWiki文库 -> 手动更新当前文库导航文件  \n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b7efbbde.png)\n\n6. ##### 如果需要在 Markdown 文档中插入图片，**请先截图**，然后在文档对应位置使用快捷键：`Ctrl + Shift + V`\n    此时，光标位置将多出一段 Markdown 图片代码，例如：\n\n        ![](assets/001/04-b7efbbde.png)\n\n    同时，将在项目目录依次创建文件夹 assets、001 (如果不存在的话)，以及此文件夹下名称为 04-b7efbbde.png 的图片文件\n\n7. ##### 对于较长文章，可以使用页内目录，依次进行如下操作，或使用快捷键 `Ctrl + D`，即可在光标处插入页内目录。\n    菜单栏 -> amWiki文库 -> 提取h2、h3标题为页内目录  \n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-3eb34e61.png)  \n    注意：请按顺序使用h1、h2、h3，且h1仅使用一次。\n\n8. ##### 如果启用了测试模块，想对一篇文档激活接口测试功能，请参照 [使用测试模块测试接口](?file=001-学习amWiki/06-使用测试模块测试接口)\n\n\n## 维护与延伸\n\n1. 本插件升级后，您想更新 `(projectName)/amWiki/` 文件夹下 web 端的工作文件，您只需重新打开 `config.json` 文件，然后在 Atom 菜单上选择 `通过“config.json”创建新文库` 即可。  \n这个二次创建操作不会影响您 library 与 assetes 文件夹下的内容。\n\n2. 借助版本管理 SVN、Git、Hg，传输协议FTP/SFTP，文件同步Dropbox、百度云等等工具，便捷实现网络访问。\n","timestamp":1532329480213},{"name":"05-使用测试模块测试接口.md","path":"001-学习amWiki/05-使用测试模块测试接口.md","content":"# 使用测试模块测试接口\n\n让文档与测试一步搞定！\n\n## 激活测试的条件\n##### 当一篇文档中使用了 `“请求地址”`、`“请求类型”`、`“请求参数”` 三个字段作为 `h3标题` 并配套对应内容时，将激活接口测试功能  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-8a6d91f1.png)  \n(详细书写格式请参照[通用API接口文档示例](?file=002-文档示范/001-通用API接口文档示例))  \n\n##### 此时文档右上角将出现 `“接口测试”` 按钮，例如：  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/04-e412c7fd.png)\n\n## 接口测试的工作原理与步骤\n1. 当测试模块处于打开状态时，每次打开文档都会扫描文档转换 html 后的内容，满足三个 h3 时即开启测试功能\n2. 开启当前文档测试功能后，即会从页面上 **抓取** 符合一定格式的测试内容\n3. 格式化抓取的内容并生成可再次修改的表单\n4. 用户点击发送请求时，先并入全局参数到当前参数列表，再发送请求\n5. 收到请求结果，格式化显示\n\n## 接口测试文档的格式要求\n\n### 请求地址的格式\n请求地址可以使用带 http 与不带 http 两种，下面两种写法都是合适的  \n\n    /api/customer-flow\n    http://localhost/api/customer-flow\n\n注意，不带 http 将自动和当前域名拼合为完整绝对路径，而不是使用相对路径\n\n### 请求类型的格式\namWiki 暂时只支持 **Get**、**Post**、**Put**、**Delete** 四种普通 ajax 请求，不支持文件上传和其他高级方式通讯\n\n### 请求参数的格式\n- 当接口不需要参数时，直接使用 **“无”** 即可  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-e030ca95.png)  \n- 请求参数列表必须使用 **表格**，且必须按 `参数名`、`类型`、`必填`、`描述`、`默认值`、`参考值` 的栏目顺序建立表格，否则不能正常抓取。  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-5a7fda87.png)  \n其中：\n    - 默认值与参考值同属参数的值，但是优先显示默认值，只有当没有默认值时参考值才有效，参考值是为了方便测试之用\n    - 参考值一栏可选，不写参考值的整个表格栏位，不会影响测试功能\n\n## 测试功能应用\n\n### 测试面板\n抓取测试内容生成测试表单如下  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-c0d8d3cb.png)\n\n### 全局参数面板\n全局参数影响所有接口，在全局参数面板可以进行新增、删除全局参数以及临时启用/禁用全局参数等操作  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-c19f1829.png)\n\n### 返回响应\n成功的响应：  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-6f851b27.png)  \n失败的响应：  \n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-bf211990.png)\n\n## 测试模块的问题\n- 测试模只能请求同域接口，不能跨域。 (跨域解决方案请参考[amWiki转接到任意域名进行接口测试](?file=001-学习amWiki/30-amWiki转接到任意域名进行接口测试))\n- 如果接口需要登录权限，请先登录您自己的系统。  \n","timestamp":1532329480213},{"name":"06-amWiki转接到任意域名进行接口测试.md","path":"001-学习amWiki/06-amWiki转接到任意域名进行接口测试.md","content":"# amWiki 转接到任意域名进行接口测试\n\n我们分两种情况进行文档转接，一种是我们有域名服务器操作权限，一种是没有\n\n## 有域名服务器操作权限的转接\n如果我们有域名服务器操作权限，那要把其他域名下的文档转接到当前域名下，其实很简单，就是一个 **反向代理** 的过程  \n\n以 nginx 为例，将地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名(_无需https_) /wiki 路径下\n```nginx\nserver {\n    listen       81;\n    server_name  abc123.com;\n    location /wiki {\n        proxy_pass https://amwiki.xf09.net/docs/;\n        proxy_redirect     off;\n        #proxy_set_header   Host             $host;\n        proxy_set_header   X-Real-IP        $remote_addr;\n        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\n        proxy_max_temp_file_size   0k;\n        proxy_connect_timeout      90;\n        proxy_send_timeout         90;\n        proxy_read_timeout         90;\n        proxy_buffer_size          4k;\n        proxy_buffers              4 32k;\n        proxy_busy_buffers_size    64k;\n        proxy_temp_file_write_size 64k;\n    }\n    # other settings ...\n}\n```\n\n## 无域名服务器操作权限\n此时，如果想要将我们的文档转接到对应域名上去，需要利用抓包工具 Fiddler 进行 **请求代理**  \n(_请下载安装抓包工具 [Fiddler](http://www.telerik.com/fiddler)，并了解 AutoResponder 面板的使用_)\n\n由于 https 特殊性，我们分两种情况来讨论：  \n\n### http 请求代理\n当原域名基于 http 通信时，由于 http 请求是一种很开放的通信，我们可以直接用 fiddler 非常简单的进行转接  \n\n比如，我们继续把地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名 /wiki 路径下  \n只需要如下配置 AutoResponder：   \n\n![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c1ef9812.png)  \n规则代码如下：\n\n    regex:.+abc123\\.com\\/wiki\\/(.+)$\n    https://amwiki.xf09.net/docs/$1\n\n第一行代码为请求匹配，其中 `regex:` 表示按正则表达式进行匹配，`.+abc123\\.com\\/wiki\\/` 表示需要代理的路径，`(.+)if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']= (和第二行配合)表示转接后续的路径，即将后续路径替换到第二行代码中的 `$1`  \n\n| | 转接地址 | 实际请求地址 |\n| : ---| :--- | :--- |\n| 例1 | http://abc123.com/wiki/index.html | https://amwiki.xf09.net/docs/index.html |\n| 例2 | http://abc123.com/wiki/amWiki/js/amWiki.js | https://amwiki.xf09.net/docs/amWiki/js/amWiki.js |\n\n### https 请求代理\n当原域名基于 https 通讯是，我们需要更多的操作才能使用代理 (Fiddler 抓包 https 的原理，有兴趣可自行知乎一下)    \n\n- **第一步，开启 https 解码**  \n  Tools -> Fiddler Options -> HTTPS -> 依次勾选如下  \n  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-ea6ad78e.png)  \n- **第二步，是安装 Fiddler 根证书**  \n  打开 http://localhost:8888/ 下载Fiddler 根证书并安装  \n  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c59334fc.png)  \n- **第三步，按照 http 的方式进行代理**  \n  例如，我们转接到百度域名的一个路径下\n\n        regex:.+www\\.baidu\\.com\\/wiki\\/(.+)$\n        https://amwiki.xf09.net/docs/$1\n\n  此时，我们打开 https://www.baidu.com/wiki/index.html 会发现，不再是“很抱歉，您要访问的页面不存在！”了\n","timestamp":1532329480213},{"name":"07-发布自己的wiki和博客.md","path":"001-学习amWiki/07-发布自己的wiki和博客.md","content":"## 发布wiki\n  * cd 到D:\\pro_tuniu\\study_project\\amwiki\n  * 右击，选择git bash，进入到git bash操作窗口\n  * 输入amwiki -u 更新本地的wiki文档\n  * 使用sourcetree，将本地的变更推送到github中\n\n\n## 发布blog\n* 进入hexo目录\n* 执行命令,执行过程中会要求输入ssh密钥@nixxxx09x\n\n\t```hexo g -d```\n* 执行完成后会自动发布到blog的库存中，同时源文件备份要手动提交到另外一个github库存中","timestamp":1532329480213},{"name":"08-hexo使用图片.md","path":"001-学习amWiki/08-hexo使用图片.md","content":"## 一、修改_config.yml\n  首先确认`_config.yml` 中有 `post_asset_folder:true`。\nHexo 提供了一种更方便管理 Asset 的设定：`post_asset_folder`\n当您设置`post_asset_folder`为`true`参数后，在建立文件时，Hexo\n会自动建立一个与文章同名的文件夹，您可以把与该文章相关的所有资源都放到那个文件夹，如此一来，您便可以更方便的使用资源。\n\n\n## 二、安装hexo-asset-image\n在hexo的目录下执行\n\t\n\tnpm install https://github.com/CodeFalling/hexo-asset-image --save\n需要等待一段时间，\n完成安装后用hexo新建文章的时候会发现_posts目录下面会多出一个和文章名字一样的文件夹。图片就可以放在文件夹下面。\n\n## 使用方法\n只要使用 `![logo](本地图片测试/logo.jpg)` 就可以插入图片。其中[]里面不写文字则没有图片标题\n\n## 说明\n使用此方法必须满足hexo为3.0以上版本","timestamp":1532329480213}]