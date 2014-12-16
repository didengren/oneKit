弹窗组件 (Overlay)
======
require.js引用overlay组件。

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
>> width: 弹窗宽度 - 可选值small(默认), normal
> .show(): 弹出弹窗


### 例子
require(['../../dist/js/overlay', '../../assets/text!./templates/formFragment.html'], function(overlay, html){
	$(function(){
		$('#pop').on('click', function(){
			overlay.init({title: "会员登录", id: "okit-login-overlay", content: html, "width": "small"}).show();
		})
	})
})