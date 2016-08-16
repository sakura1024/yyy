$(function() {
	//工具提示初始化
	$('[data-toggle="tooltip"]').tooltip();

	//标签横向滚动
	var width = 30;
	$('.nav').children().each(function(index, element) {

		width = width + element.clientWidth;
	})
	$('.nav').css('width', width);
	

})