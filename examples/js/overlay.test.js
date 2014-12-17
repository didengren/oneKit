requirejs.config({
    paths: {
        'oneKit': '../../dist/js' //指定Module所在的路径
    }
});
require(['oneKit/overlay', '../../assets/text!./templates/formFragment.html'], function(overlay, html){
	$(function(){
		$('#login').on('click', function(){
			overlay.init({title: "会员登录", id: "okit-login-overlay", content: html, "width": "small"}).show();
		})

		$('#largePic').on('click', function(){
			overlay.init({title: "马尔代夫 遗失在人间的天堂", id: "okit-pic-overlay", content: "<img src='./img/bp.jpg' />", "width": "40%"}).show();
		})
	})
})