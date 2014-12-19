提示信息组件 (Tooltip)
======
require.js引用tooltip组件。

说明
====
Tooltip是实现鼠标滑过现实一些附加信息等的功能，当页面中的html代码中包含```class="okit-tooltip"``` 和```title="你要在tooltip中显示的内容"```就会```自动```加上tooltip功能。

安装: 
===
引入```jQuery```, ```tooltip组件```和```css文件```，详细参看下方个组件详细文档。
```html
<script src="/assets/jquery-1.11.1.min.js"></script>
<!-- 提示信息组件样式 -->
<link href="/dist/css/tooltip.css" rel="stylesheet" type="text/css" />
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
	        //'oneKit/tooltip': '../../dist/js/tooltip' //指定Module所在的路径
	    }
	});
</script>
```

main.js代码
```javascript
// 引入依赖模块tooltip
require(['oneKit/tooltip'], function(){
	// 你的代码
})
```
HTML部分代码：
```html
<p><a href="#" class="okit-tooltip" title="提示：该链接会将您带到新的页面。">Lorem ipsum venenatis aenean</a> taciti quisque tempor amet, egestas placerat donec auctor nulla curae, ultricies varius taciti duis proin ad.</p>
```

参数
====
无参数

Demo
====
[http://wxyu.sinaapp.com/oneKit/examples/tooltip.html](http://wxyu.sinaapp.com/oneKit/examples/tooltip.html)
