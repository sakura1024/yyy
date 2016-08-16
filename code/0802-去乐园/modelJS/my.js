define(['text!../../view/my.html', 'jquery'], function(html, $) {
	//渲染页面
	function render() {
		$('#box').html(html);
	}
	return {
		render: render
	}
})