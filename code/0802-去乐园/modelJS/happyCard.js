define(['text!../../view/happyCard.html', 'jquery'], function(html, $) {
	//渲染页面
	function render() {
		$('#box').html(html);
	}
	return {
		render: render
	}
})