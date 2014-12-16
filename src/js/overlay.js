define(function(){

	var defaults = {
		title: "标题",
		id: "okit-overlay",
		content: "",
		width: ""
	}

	function Overlay(){}

	Overlay.prototype = {
		init: function(opts){
			this.id = opts.id;
			__.generateDialogHTML(opts);
			__.closeOverlay();
			return this;
		},

		show: function(){
			$('#' + this.id).fadeIn(300);
		},

		hide: function(){
			$('#' + this.id).fadeOut(300);
		}
	}

	var overlay = new Overlay();

	// 私有方法
	var __ = {
		generateDialogHTML: function(options){
			var options = $.extend(defaults, options);
		
			var overlayHTML = "<div class='okit-overlay okit-"+ options.width +"' id=" + options.id + "><div class='okit-overlay-title'><h3>" + options.title + "</h3><span class='okit-overlay-close ion-ios-close-empty'></span></div><div class='okit-overlay-main'>" + options.content + "</div></div>";

			if(!$('#' + options.id).length){
				$(overlayHTML).appendTo($('body'));
			}
			var overlayNode = $('.okit-overlay');

			$('#' + options.id).css({'top': '20%', 'left': ($('body').width() - overlayNode.width())/2 + "px"});
		},

		closeOverlay: function(t){
			var _this = this;
			$('.okit-overlay-close').on('click', function(){
				overlay.hide();
			})
		}
	}

	return overlay;
})