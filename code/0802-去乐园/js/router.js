define(['backbone','jquery'],function(backbone,$){
	
	var Router=Backbone.Router.extend({
		routes:{
			''    :'home',
			'home':'home',
			'fairyland':'fairyland',
			'happyCard':'happyCard',
			'my'       : 'my',
			'*actions'  : 'defaultAction'
		},
		home:function(){
			console.log("home");
			require(['modelJS/home.js'],function(home){
				home.render();
				home.changeColor();
				home.getData();
			});
		},
		fairyland:function(){
			console.log("fairyland");
			require(['modelJS/fairyland.js'],function(fairyland){
				fairyland.render();
				fairyland.tabClick();
				fairyland.getData();
			});
		},
		happyCard:function(){
			console.log("happyCard");
			require(['modelJS/happyCard.js'],function(happyCard){
				happyCard.render();
			});
		},
		my:function(){
			console.log("my");
			require(['modelJS/my.js'],function(my){
				my.render();
			});
		}
		
	});
	var router=new Router();
	return router;
})