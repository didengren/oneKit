require(['../../dist/js/overlay', '../../assets/text!./templates/formFragment.html'], function(overlay, html){
	$(function(){
		$('#pop').on('click', function(){
			overlay.init({title: "会员登录", id: "okit-login-overlay", content: html, "width": "small"}).show();
		})
	})
})