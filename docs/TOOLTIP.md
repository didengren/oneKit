提示信息组件 (Tooltip)
======
require.js引用tooltip组件。

说明
====
页面中的html代码中包含class="okit-tooltip" 和title="你要在tooltip中显示的内容"就会自动加上tooltip功能。

参数
====
无参数


例子
======
Javascript部分代码：
```javascript
requirejs.config({
    paths: {
        'oneKit/tooltip': '../../dist/js/tooltip' //指定Module所在的路径
    }
});
require(['oneKit/tooltip'], function(){
	$(function(){
		// 你的代码
	})
})
```

HTML部分代码：
```html
<p><a href="#" class="okit-tooltip" title="提示：该链接会将您带到新的页面。">Lorem ipsum venenatis aenean</a> taciti quisque tempor amet, egestas placerat donec auctor nulla curae, ultricies varius taciti duis proin ad.</p>
```

Demo
====
[http://wxyu.sinaapp.com/oneKit/examples/tooltip.html](http://wxyu.sinaapp.com/oneKit/examples/tooltip.html)
