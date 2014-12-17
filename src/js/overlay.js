define('oneKit/overlay', [], function(){
	var MASKID = "okit-overkay-mask";

	var defaults = {
		title: "标题",
		id: "okit-overlay",
		content: "",
		width: "normal"
	}

	function Overlay(){}

	Overlay.prototype = {
		init: function(opts){
			this.id = opts.id;
			__.generateMask();
			__.generateDialogHTML(opts);
			__.closeOverlay(this.id);
			return this;
		},

		show: function(){
			$('#' + this.id).fadeIn(300);
		},

		hide: function(id){
			$('#' + id).fadeOut(300);
		}
	}

	var overlay = new Overlay();

	// 私有方法
	var __ = {
		generateDialogHTML: function(options){
			var options = $.extend(defaults, options);
			var widthOpt = this.setWidth(options.width);

			var overlayHTML = "<div class='okit-overlay okit-"+ widthOpt.label +"' id=" + options.id + "><div class='okit-overlay-title'><h3>" + options.title + "</h3><span class='okit-overlay-close ion-ios-close-empty'></span></div><div class='okit-overlay-main'>" + options.content + "</div></div>";
			if(!$('#' + options.id).length){
				$(overlayHTML).appendTo($('body'));
				var overlayNode = $('#' + options.id);
				overlayNode.css({'width': widthOpt.width}).css({'top': '20%', 'left': ($('body').width() - overlayNode.width())/2 + "px"});
			}

			this.showMask();
		},

		closeOverlay: function(id){
			var _this = this;
			$("#" + id).find('.okit-overlay-close').on('click', function(){
				overlay.hide(id);
				_this.hideMask();
			})
		},

		setWidth: function(w){
			if(w === 'small' || w === 'normal'){
				return {label: w, width: ''};
			}else if(/^\d+px|em|%$/.test(w)){
				return {label: '', width: w};
			}
		},

		generateMask: function(){
			$("#" + MASKID).length ? '' : $('<div id="'+ MASKID +'">').appendTo($('body'));
		},

		hideMask: function(){
			$("#" + MASKID).hide();
		},

		showMask: function(){
			$("#" + MASKID).show();
		}
	}

	return overlay;
})