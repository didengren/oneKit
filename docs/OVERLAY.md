弹窗组件 (Overlay)
======
require.js引用overlay组件。

说明
====
Overlay弹窗是一种常见的组件，通常用于弹出用户登录或注册、图片的放大预览、消息的提示等。

安装: 
===
引入```jQuery```, ```ionicons.css```, ```overlay组件```和```css文件```，详细参看下方个组件详细文档。
```html
<script src="/assets/jquery-1.11.1.min.js"></script>
<link href="/dist/css/ionicons.css" rel="stylesheet" type="text/css" />
<!-- 弹窗组件样式 -->
<link href="/dist/css/overlay.css" rel="stylesheet" type="text/css" />
```

使用:
===
引入```require.js```并添加主文件```data-main="./js/main.js" ```
```html
<script src="/assets/require.js" data-main="./js/main.js"></script>
```
配置模块路径：
```javascript
<script>
	requirejs.config({
	    paths: {
	        'oneKit': '../../dist/js' //指定Module所在的路径(相对于包含require.js的HTML所属目录)
	        //或
	        //'oneKit/overlay': '../../dist/js/overlay' //指定Module所在的路径
	    }
	});
</script>
```

main.js代码
```javascript
// 引入依赖模块overlay
require(['oneKit/overlay', '../../assets/text!./templates/formFragment.html'], function(overlay, html){
	$(function(){
		$('#pop').on('click', function(){
			overlay.init({
				title: "会员登录",
				id: "okit-login-overlay",
				content: html,
				width: "small"
			}).show();
		})
	})
})
```
HTML部分代码：
```html
<p><button id="pop">用户登录</button></p>
```

参数
====
>.init(opts): 初始化
>
> opts(对象格式):
>> title: 头文字
>
>> id: 指定弹窗ID，随意
>
>> content: 弹窗主题内容
>
>> width: 弹窗宽度 - 可选值small(默认), normal或自定义尺寸(支持px、em、%单位，例: 120px)
> 
.show(): 弹出弹窗

Demo
====
[http://wxyu.sinaapp.com/oneKit/examples/overlay.html](http://wxyu.sinaapp.com/oneKit/examples/overlay.html)
