if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"01-amWiki轻文库简介.md","path":"001-学习amWiki/01-amWiki轻文库简介.md","content":"# amWiki 轻文库简介\r\n\r\n![amWiki logo](https://amwiki.xf09.net/docs/assets/logo.png)  \r\namWiki 是一款基于 Javascript 脚本语言、依赖 Atom 编辑器、使用 Markdown 标记语法的轻量级开源 wiki 文库系统。  \r\namWiki 致力于让大家可以更简单、更便捷的建设个人和团队文库系统！  \r\n\r\n[[view amWiki on Github](https://github.com/TevinLi/amWiki)]\r\n\r\nGitHub:  \r\n[![](https://img.shields.io/github/stars/TevinLi/amWiki.svg?style=social&label=Star)](https://github.com/TevinLi/amWiki \"GitHub Stars\")\r\n[![](https://img.shields.io/github/forks/TevinLi/amWiki.svg?style=social&label=Fork)](https://github.com/TevinLi/amWiki \"GitHub Forks\")\r\n[![](https://img.shields.io/github/issues-raw/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Open Issues\")\r\n[![](https://img.shields.io/github/issues-closed-raw/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Closed Issues\")\r\n[![](https://img.shields.io/github/contributors/TevinLi/amWiki.svg)](https://github.com/TevinLi/amWiki \"GitHub Contributors\")  \r\nApm:  \r\n[![apm](https://img.shields.io/apm/v/amWiki.svg)](https://atom.io/packages/amWiki \"Apm Version\")\r\n[![apm](https://img.shields.io/apm/dm/amWiki.svg)](https://atom.io/packages/amWiki \"Apm Downloads\")\r\n[![apm](https://img.shields.io/apm/l/amWiki.svg)](https://atom.io/packages/amWiki \"MIT License\")  \r\n\r\n## amWiki 优势\r\n- 文档系统采用 Markdown 语法 [>>Markdown 快速开始](?file=001-学习amWiki/05-学习markdown/01-Markdown快速开始)\r\n- 无需服务端开发，只需支持 http 访问的静态网页空间\r\n- 不使用数据库，使用 `.md` 扩展名存储文档为本地文件\r\n- 一键创建新文库，自动生成一套 Html 页面\r\n- 自动更新文库导航目录\r\n- 支持截图直接粘帖为本地 png 并插入当前 Markdown 文档\r\n- Web 端页面自适应显示，适合各种 Web 平台与屏幕尺寸\r\n- 支持接口文档自动抓取内容生成简单的 Ajax 测试\r\n- ... (更多内容期待您的发现)\r\n\r\n## 效果演示\r\n**Web端**  \r\n一键创建新文库默认生成Web端效果一览：[https://tevinli.github.io/amWiki/](https://tevinli.github.io/amWiki/index.html)  \r\n\r\n**工作端**  \r\n工作端需要您安装 Atom 与 amWiki 才能体验\r\n","timestamp":1528961445807},{"name":"02-amWiki功能导图.md","path":"001-学习amWiki/02-amWiki功能导图.md","content":"# amWiki 功能导图\r\n\r\n![amWiki功能导图](https://amwiki.xf09.net/docs/assets/mapping.png)  \r\n\r\n**说明**：灰色文字代表的功能部分，表示目前版本没有，但是已经列入开发计划\r\n","timestamp":1528961445807},{"name":"03-如何开始一个新amWiki轻文库.md","path":"001-学习amWiki/03-如何开始一个新amWiki轻文库.md","content":"# 如何开始一个新 amWiki 轻文库\r\n\r\n## 开始一个新文库的步骤\r\n\r\n1. ##### 下载 Github 出品的开源文本编辑器 [Atom](https://atom.io/ \"打开Atom官网\")，并安装  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/02-0e63f48d.png)\r\n\r\n2. ##### 安装 Atom 完成之后，再安装插件 amWiki，您可以通过以下三种途径安装：\r\n    - 【方式一】：通过 Atom 菜单，File -> Setting -> Install -> 搜索 `amWiki`  \r\n      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-ec2b10b3.png)  \r\n      <br>\r\n    - 【方式二】：运行：`apm install amWiki`  \r\n      ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-37a29814.png)  \r\n      <br>\r\n    - 【方式三】：从Github的 [amWiki版本发布](https://github.com/TevinLi/amWiki/releases) 下载zip，(windows)解压到 `C:\\Users\\Administrator\\.atom\\packages`，并将文件夹名 `amWiki-x.x.x` 改为 `amWiki`\r\n\r\n3. ##### 重启 Atom (必须)\r\n\r\n4. ##### 在本地您需要创建文库的位置创建一个文件夹 (非 Atom 编辑器中)\r\n\r\n5. ##### 在 Atom 中 `Add Project Folder` (添加项目文件夹)，并指向刚创建的文件夹\r\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/03-7ce48bba.png)\r\n\r\n6. ##### 在 Atom 刚创建的项目下新建 `config.json` 文件，并按 json 格式配置以下属性：\r\n    - **name**，您的文库名称，设置但为空或不设置将显示默认名\r\n    - **ver**，文本版本号或维护者名号，设置但为空将不显示，注意诺不设置此属性将显示 amWiki 作者\r\n    - **logo**，logo 的 url，设置但为空或不设置将显示默认 logo\r\n    - **colour**，自定义颜色，默认为蓝色\r\n    - **testing**，是否启用接口测试模块，默认值 false  \r\n    - 例如：\r\n    ```javascript\r\n    {\r\n        \"name\": \"A3项目文档中心\",\r\n        \"ver\": \"\",\r\n        \"logo\": \"http://abc.com/logo.jpg\",\r\n        \"testing\": true\r\n    }\r\n    ```\r\n7. ##### 保持 `config.json` 处于当前打开状态，在 Atom 菜单点击：\r\n\r\n    amWiki文库 -> 通过“config.json”创建新文库  \r\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-78f2030d.png)\r\n\r\n8. ##### 此时项目中自动创建了许多内容，其中 library 文件夹即为您的文库文件夹\r\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/02-d72e59a9.png)\r\n\r\n9. ##### 使用 `F12` 启动本地静态服务器，访问刚刚自动创建的 index.html\r\n\r\n\r\n## 文库目录结构\r\n项目目录自动生创建的内容如下\r\n\r\n    index.html                 // http 访问入口页面\r\n    amWiki/                    // amWiki Web 端程序文件夹\r\n    library/                   // 您的 Markdown 文库目录，所有文件必须使用 .md 格式\r\n       ├ $navigation.md        // amWiki 文库目录导航文件，可自动/手动更新\r\n       ├ 首页.md                // Web 端打开页面时页面页面默认显示的内容\r\n       ├ 001-学习amWiki/        // Markdown 文件夹01\r\n       │   ├ 001-关于amWiki     // 一些 Markdown 文档，支持二级目录\r\n       │   └ 002-...\r\n       ├ 002-文档示范/          // Markdown 文件夹02\r\n       │   ├ 001-通用api        // 一些 Markdown 文档，支持二级目录\r\n       │   └ 002-...\r\n       └ 003-...               // 更多 Markdown 文件夹\r\n    (assetes/)                 // 如果您粘帖截图，图片文件将自动创建在此处\r\n\r\n\r\n## 如何使用\r\n一键创建新文库后，您可以通过以下方式开始 amWiki 文库之旅：\r\n\r\n1. 在 Atom 编辑器中使用快捷键 `F12` 或在浏览器中使用 http 访问刚刚创建的 index.html。\r\n2. PC 端使用左侧导航栏、移动端使用右上角弹出菜单来切换页面。\r\n3. 在导航栏顶部，可以使用筛选功能通过输入关键词对整个导航目录进行筛选。\r\n4. 如果存在页内目录，直接点击，页内目录使用 hash 滚动；同时您可以直接带 hash 分享，以方便他人快速浏览指定内容。\r\n","timestamp":1528961445807},{"name":"04-如何编辑amWiki轻文库.md","path":"001-学习amWiki/04-如何编辑amWiki轻文库.md","content":"# 如何编辑 amWiki 轻文库\r\n\r\n文库创建后，您就可以编辑自己的文库了\r\n\r\n## 基本编辑\r\n\r\n1. ##### 新建文件或文件夹，组织您自己的文库  \r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-88742d4f.png)\r\n\r\n2. ##### 每个文件夹或文件要求使用 `id-名称.md` 来命名，其中：\r\n\r\n   1. id 仅允许 **整数** 或 **浮点数** 类型，且 **不可重复**\r\n   2. 必须使用连 **接符** 或 **下划线** 将 id 与后续具体名称相连\r\n   3. 文件只能使用 **.md** 扩展名  \r\n\r\n   如果未能满足以上条件，将弹出以下错误提示：  \r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-4801dadd.png)  \r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-79e0b528.png)  \r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-0c4d9e7d.png)  \r\n   正确的命名，例如：  \r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-12e1b01c.png)  \r\n\r\n3. ##### 使用 Markdown 语法编辑您的文档\r\n   ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b3be9411.png)\r\n\r\n## 扩展编辑\r\n\r\n1. ##### library 文件夹下 `首页.md` 文档为默认打开时的显示内容\r\n   您可以适当修改此文档内容以符合您的项目需求  \r\n\r\n5. ##### `$navigation.md` 导航文件无需人工维护，创建新文件夹或文件时将自动更新，也可以在菜单栏手动刷新：\r\n\r\n    菜单栏 -> amWiki文库 -> 手动更新当前文库导航文件  \r\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-b7efbbde.png)\r\n\r\n6. ##### 如果需要在 Markdown 文档中插入图片，**请先截图**，然后在文档对应位置使用快捷键：`Ctrl + Shift + V`\r\n    此时，光标位置将多出一段 Markdown 图片代码，例如：\r\n\r\n        ![](assets/001/04-b7efbbde.png)\r\n\r\n    同时，将在项目目录依次创建文件夹 assets、001 (如果不存在的话)，以及此文件夹下名称为 04-b7efbbde.png 的图片文件\r\n\r\n7. ##### 对于较长文章，可以使用页内目录，依次进行如下操作，或使用快捷键 `Ctrl + D`，即可在光标处插入页内目录。\r\n    菜单栏 -> amWiki文库 -> 提取h2、h3标题为页内目录  \r\n    ![](https://amwiki.xf09.net/docs/assets/001.tiny/04-3eb34e61.png)  \r\n    注意：请按顺序使用h1、h2、h3，且h1仅使用一次。\r\n\r\n8. ##### 如果启用了测试模块，想对一篇文档激活接口测试功能，请参照 [使用测试模块测试接口](?file=001-学习amWiki/06-使用测试模块测试接口)\r\n\r\n\r\n## 维护与延伸\r\n\r\n1. 本插件升级后，您想更新 `(projectName)/amWiki/` 文件夹下 web 端的工作文件，您只需重新打开 `config.json` 文件，然后在 Atom 菜单上选择 `通过“config.json”创建新文库` 即可。  \r\n这个二次创建操作不会影响您 library 与 assetes 文件夹下的内容。\r\n\r\n2. 借助版本管理 SVN、Git、Hg，传输协议FTP/SFTP，文件同步Dropbox、百度云等等工具，便捷实现网络访问。\r\n","timestamp":1528961445807},{"name":"05-使用测试模块测试接口.md","path":"001-学习amWiki/05-使用测试模块测试接口.md","content":"# 使用测试模块测试接口\r\n\r\n让文档与测试一步搞定！\r\n\r\n## 激活测试的条件\r\n##### 当一篇文档中使用了 `“请求地址”`、`“请求类型”`、`“请求参数”` 三个字段作为 `h3标题` 并配套对应内容时，将激活接口测试功能  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-8a6d91f1.png)  \r\n(详细书写格式请参照[通用API接口文档示例](?file=002-文档示范/001-通用API接口文档示例))  \r\n\r\n##### 此时文档右上角将出现 `“接口测试”` 按钮，例如：  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/04-e412c7fd.png)\r\n\r\n## 接口测试的工作原理与步骤\r\n1. 当测试模块处于打开状态时，每次打开文档都会扫描文档转换 html 后的内容，满足三个 h3 时即开启测试功能\r\n2. 开启当前文档测试功能后，即会从页面上 **抓取** 符合一定格式的测试内容\r\n3. 格式化抓取的内容并生成可再次修改的表单\r\n4. 用户点击发送请求时，先并入全局参数到当前参数列表，再发送请求\r\n5. 收到请求结果，格式化显示\r\n\r\n## 接口测试文档的格式要求\r\n\r\n### 请求地址的格式\r\n请求地址可以使用带 http 与不带 http 两种，下面两种写法都是合适的  \r\n\r\n    /api/customer-flow\r\n    http://localhost/api/customer-flow\r\n\r\n注意，不带 http 将自动和当前域名拼合为完整绝对路径，而不是使用相对路径\r\n\r\n### 请求类型的格式\r\namWiki 暂时只支持 **Get**、**Post**、**Put**、**Delete** 四种普通 ajax 请求，不支持文件上传和其他高级方式通讯\r\n\r\n### 请求参数的格式\r\n- 当接口不需要参数时，直接使用 **“无”** 即可  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-e030ca95.png)  \r\n- 请求参数列表必须使用 **表格**，且必须按 `参数名`、`类型`、`必填`、`描述`、`默认值`、`参考值` 的栏目顺序建立表格，否则不能正常抓取。  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-5a7fda87.png)  \r\n其中：\r\n    - 默认值与参考值同属参数的值，但是优先显示默认值，只有当没有默认值时参考值才有效，参考值是为了方便测试之用\r\n    - 参考值一栏可选，不写参考值的整个表格栏位，不会影响测试功能\r\n\r\n## 测试功能应用\r\n\r\n### 测试面板\r\n抓取测试内容生成测试表单如下  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-c0d8d3cb.png)\r\n\r\n### 全局参数面板\r\n全局参数影响所有接口，在全局参数面板可以进行新增、删除全局参数以及临时启用/禁用全局参数等操作  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-c19f1829.png)\r\n\r\n### 返回响应\r\n成功的响应：  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-6f851b27.png)  \r\n失败的响应：  \r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/06-bf211990.png)\r\n\r\n## 测试模块的问题\r\n- 测试模只能请求同域接口，不能跨域。 (跨域解决方案请参考[amWiki转接到任意域名进行接口测试](?file=001-学习amWiki/30-amWiki转接到任意域名进行接口测试))\r\n- 如果接口需要登录权限，请先登录您自己的系统。  \r\n","timestamp":1528961445807},{"name":"06-amWiki转接到任意域名进行接口测试.md","path":"001-学习amWiki/06-amWiki转接到任意域名进行接口测试.md","content":"# amWiki 转接到任意域名进行接口测试\r\n\r\n我们分两种情况进行文档转接，一种是我们有域名服务器操作权限，一种是没有\r\n\r\n## 有域名服务器操作权限的转接\r\n如果我们有域名服务器操作权限，那要把其他域名下的文档转接到当前域名下，其实很简单，就是一个 **反向代理** 的过程  \r\n\r\n以 nginx 为例，将地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名(_无需https_) /wiki 路径下\r\n```nginx\r\nserver {\r\n    listen       81;\r\n    server_name  abc123.com;\r\n    location /wiki {\r\n        proxy_pass https://amwiki.xf09.net/docs/;\r\n        proxy_redirect     off;\r\n        #proxy_set_header   Host             $host;\r\n        proxy_set_header   X-Real-IP        $remote_addr;\r\n        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\r\n        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\r\n        proxy_max_temp_file_size   0k;\r\n        proxy_connect_timeout      90;\r\n        proxy_send_timeout         90;\r\n        proxy_read_timeout         90;\r\n        proxy_buffer_size          4k;\r\n        proxy_buffers              4 32k;\r\n        proxy_busy_buffers_size    64k;\r\n        proxy_temp_file_write_size 64k;\r\n    }\r\n    # other settings ...\r\n}\r\n```\r\n\r\n## 无域名服务器操作权限\r\n此时，如果想要将我们的文档转接到对应域名上去，需要利用抓包工具 Fiddler 进行 **请求代理**  \r\n(_请下载安装抓包工具 [Fiddler](http://www.telerik.com/fiddler)，并了解 AutoResponder 面板的使用_)\r\n\r\n由于 https 特殊性，我们分两种情况来讨论：  \r\n\r\n### http 请求代理\r\n当原域名基于 http 通信时，由于 http 请求是一种很开放的通信，我们可以直接用 fiddler 非常简单的进行转接  \r\n\r\n比如，我们继续把地址 https://amwiki.xf09.net/docs/ 下所有文档转接到任意域名 /wiki 路径下  \r\n只需要如下配置 AutoResponder：   \r\n\r\n![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c1ef9812.png)  \r\n规则代码如下：\r\n\r\n    regex:.+abc123\\.com\\/wiki\\/(.+)$\r\n    https://amwiki.xf09.net/docs/$1\r\n\r\n第一行代码为请求匹配，其中 `regex:` 表示按正则表达式进行匹配，`.+abc123\\.com\\/wiki\\/` 表示需要代理的路径，`(.+)if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']= (和第二行配合)表示转接后续的路径，即将后续路径替换到第二行代码中的 `$1`  \r\n\r\n| | 转接地址 | 实际请求地址 |\r\n| : ---| :--- | :--- |\r\n| 例1 | http://abc123.com/wiki/index.html | https://amwiki.xf09.net/docs/index.html |\r\n| 例2 | http://abc123.com/wiki/amWiki/js/amWiki.js | https://amwiki.xf09.net/docs/amWiki/js/amWiki.js |\r\n\r\n### https 请求代理\r\n当原域名基于 https 通讯是，我们需要更多的操作才能使用代理 (Fiddler 抓包 https 的原理，有兴趣可自行知乎一下)    \r\n\r\n- **第一步，开启 https 解码**  \r\n  Tools -> Fiddler Options -> HTTPS -> 依次勾选如下  \r\n  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-ea6ad78e.png)  \r\n- **第二步，是安装 Fiddler 根证书**  \r\n  打开 http://localhost:8888/ 下载Fiddler 根证书并安装  \r\n  ![](https://amwiki.xf09.net/docs/assets/001.tiny/07-c59334fc.png)  \r\n- **第三步，按照 http 的方式进行代理**  \r\n  例如，我们转接到百度域名的一个路径下\r\n\r\n        regex:.+www\\.baidu\\.com\\/wiki\\/(.+)$\r\n        https://amwiki.xf09.net/docs/$1\r\n\r\n  此时，我们打开 https://www.baidu.com/wiki/index.html 会发现，不再是“很抱歉，您要访问的页面不存在！”了\r\n","timestamp":1528961445807},{"name":"07-发布自己的wiki.md","path":"001-学习amWiki/07-发布自己的wiki.md","content":"## 将写好的博客发布到github中\r\n  * cd 到D:\\pro_tuniu\\study_project\\amwiki\r\n  * 右击，选择git bash，进入到git bash操作窗口\r\n  * 输入amwiki -u 更新本地的wiki文档\r\n  * 使用sourcetree，将本地的变更推送到github中\r\n","timestamp":1528961445807}]