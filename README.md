oneKit
======

一系列基于jQuery和require.js的UI组件。

组件依赖于：jQuery, require.js, ionicons.css

安装:
====
引入```jQuery```, ```ionicons.css```和```相关组件js```和```css文件```，详细参看下方个组件详细文档。
以```弹窗组件```为例:
```html
<script src="/assets/jquery-1.11.1.min.js"></script>
```
```html
<link href="/dist/css/ionicons.css" rel="stylesheet" type="text/css" />
<link href="/dist/css/overlay.css" rel="stylesheet" type="text/css" />
```
使用:
====
引入```require.js```并添加主文件
```html
<script src="/assets/require.js" data-main="./js/main.js"></script>
```
main.js代码
```javascript
// 引入依赖模块overlay
require(['/dist/js/overlay'], function(overlay){
	$(function(){
		$('#pop').on('click', function(){
			overlay.init({title: "这是头部", id: "okit-login-overlay", content: "写点东西放在这里", "width": "small"}).show();
		})
	})
})
```
## 目录结构:
        ├───assets             // 依赖库
        ├───build
        ├───dist               // 真正的组件
        │   ├───css
        │   ├───fonts
        │   └───js
        ├───docs               // 说明文档
        ├───examples           // 演示例子
        │   └───js
        │       └───templates
        └───src                // 源文件
            ├───fonts
            ├───js
            │   ├───nls
            │   └───_base
            └───scss

组件:
======
▪ 弹窗组件(Overlay) - [https://github.com/wxyudl/oneKit/blob/master/docs/OVERLAY.md](https://github.com/wxyudl/oneKit/blob/master/docs/OVERLAY.md)
