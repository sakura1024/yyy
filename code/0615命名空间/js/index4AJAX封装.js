var xmlhttp;
//参数：发送方式 （GET POST）发送路径（url） 发送类型（同步还是异步false或true） 
//成功函数 失败函数  接收的数据（例如："username="+userName）
function ajaxFn(method, url, async, secFn, failFn, data) {
	try { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} catch (e) { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//打开
		xmlhttp.open(method, url, async); //如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：				
	if (method == "get" || method == "GET") {
		//xmlhttp.open(method, url, async); //如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：				
		xmlhttp.send();
	} else if (method == "post" || method == "POST") {
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(data);
	} else {
		alert("请求错误");
		return;
	}
	//处理响应
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			//接收相应回来的数据
			secFn(xmlhttp.responseText);
		} 
	}
	//return xmlhttp;
}