//封装添加事件绑定 法一
function EventUtil1() {
	
	
	
}














//封装添加事件绑定 法二
function EventUtil2() {
	this.bindHandler=function(ele,type,fn){
		if (window.addEventListener) {
			ele.addEventListener(type,fn);
		} else{
			ele.attachEvent(type,fn);
		}
		
	}
	this.removeHandler=function(ele,type,fn){
		if (window.removeEventListener) {
			ele.removeEventListener(type,fn,false);
		} else{
			ele.detachEvent("on"+type,fn,false)
		}
	}
}

