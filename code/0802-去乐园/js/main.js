//配置使用的js路径的  不包括requirejs
require.config({
//	baseUrl:"",
	paths:{
		underscore:'../lib/underscore',
		jquery:'../lib/jquery',
		backbone:'../lib/backbone',
		router:'router',
		text:'../lib/text'
	}
});
//调用功能模块
require(['backbone','router'],function(backbone){
	backbone.history.start();
});
