define("oneKit/tooltip", [], function(){
	var tipList = $('.okit-tooltip');
	var widgetId = "okit-tooltip-widget";
	var arrowId = "okit-tooltip-arrow";
	var contentId = "okit-tooltip-content";
	var delay = 200;
	var tempTitle = '';
	var timer;

	// 监听事件
	var eventHandlers = {
		mouseenter: function(e){
			var widgetNode = $("#" + widgetId);
			widgetNode.find('#' + contentId).html(this.title);
			tempTitle = this.title;
			this.title = '';

			if(this.offsetTop > (this.offsetHeight * 2)){
				setTooltipPosition(widgetNode, this, 'top');
			}else{
				setTooltipPosition(widgetNode, this, 'bottom');
			}
			
			showTip();
			return;
		},

		mouseleave: function(){
			hideTip();
			this.title = tempTitle;
		}
	}

	// 设置tooltip的位置，可以为内容之上、下，左和右。
	function setTooltipPosition(wn, context, p){
		/*
		 * wn: widget节点
		 * p： 字符串, 表示Tooltip所在的位置
		 * 值： "top", "bottom", "left", "right"
		*/
		var pos = p || 'bottom';

		switch(pos){
			case "top":
				setArrowPosition('bottom');
				wn.css('top', context.offsetTop - wn.outerHeight() - 5);
				break;
			case "bottom":
				setArrowPosition('top');
				wn.css('top', context.offsetTop + wn.outerHeight() + 3);
				break;
		}
	}

	// 设置tooltip中箭头的指向
	function setArrowPosition(p){
		var widgetNode = $("#" + widgetId);
		var arrowNode = $("#" + arrowId);
		/*
		 * p： 字符串, 表示箭头所在位置及指向方向
		 * 值： "top", "bottom", "left", "right"
		*/
		var pos = p || 'bottom';
		$('#okit-tooltip-arrow').removeClass().addClass('okit-arrow-' + pos);

		switch(pos){
			case "bottom":
				arrowNode.css('top', widgetNode.outerHeight() - 5);
				break;
			case "top":
				arrowNode.css('top', -5);
				break;
		}
	}

	// 显示tooltip
	function showTip(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$("#" + widgetId).show();
		}, delay)
	}

	// 隐藏tooltip
	function hideTip(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$("#" + widgetId).hide();
		}, delay)
	}

	// 初始化tooltip结构
	var tooltipLayer = $('<div id='+ widgetId +' />').appendTo(document.body).css('position', 'absolute');
	$('<div id='+ arrowId +' />').appendTo(tooltipLayer);
	$('<div id='+ contentId +' />').appendTo(tooltipLayer);

	tipList.on('mouseenter', eventHandlers['mouseenter']).on('mouseleave', eventHandlers['mouseleave']);
})