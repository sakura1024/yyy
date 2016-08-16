var i=0;
function time(){
	i++;
	//以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。
    //注释：web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务
	postMessage(i);
	setTimeout(time,500);
}
time();