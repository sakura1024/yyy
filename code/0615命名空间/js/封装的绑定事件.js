//方式一
//事件封装： 两个功能：  绑定  解除绑定
var EventUtil1={
	//绑定
	bindHandler:function(element,type,handler){
		if(window.addEventListener)  //标准浏览器
		{
			element.addEventListener(type,handler);
		}else if(window.attachEvent){//IE8以下浏览器
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	//解除事件
	removeHandler:function(element,type,handler){
		if(window.removeEventListener)  //标准浏览器
		{
			element.removeEventListener(type,handler);
		}else if(window.attachEvent){//IE8以下浏览器
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	}
	
};

//方式二

function EventUtil2(){
	this.bindHandler=(function(){
		//判断浏览器类型
		if(window.addEventListener)
		{
		  	return function(element,type,handler){
		  		element.addEventListener(type,handler);
		  	}
		}else{   //IE8以下浏览器
			return function(element,type,handler){
				element.attachEvent("on"+type,handler);
			}
		}
	})();
	
	//解除绑定事件
	this.removeHandler=(function(){
		if(window.removeEventListener){
			return function(element,type,handler){
				element.removeHandler(type,handler,false);
			}
			
		}else{//IE8以下浏览器
			return function(element,type,handler){
				element.detachEvent("on"+type,handler,false);
			}
		}
	})();
	
} 