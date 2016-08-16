//rem
new function() {
	document.documentElement.style.fontSize = innerWidth / 3.2 + "px";
	window.addEventListener("resize", function() {
		document.documentElement.style.fontSize = innerWidth / 3.2 + "px";
	}, false);
}

//调用ajax
var url = "data/nav.json";
var xhr;
getJsonFile(url); //页面初始化时  1.json
function getJsonFile(url) {
	xhr = createXML();
	xhr.open("GET", url, true);
	xhr.send();
	xhr.onreadystatechange = showjson;
}
/**********************************从后台json获取过来创建节点的各种方法************************************************************/
//封装一个xml函数
function createXML() {
	//		var xhr;
	try {
		xhr = new XMLHttpRequest();

	} catch(e) {
		xhr = new ActiveXObiect("Microsoft.XMLHTTP");
	}
	return xhr;
}

//通过json获取图片信息，显示在banner
function showjson() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		console.log(xhr.responseText) //json字符串
			//创建节点,显示在页面上
		showBanner();

	}
}

//创建节点
function showBanner() {
	//将json字符串转成json对象
	var aObj = JSON.parse(xhr.responseText).result;
	//json里面json result长度为3
	console.log(aObj.length);
	//先拿到父元素
	var oSwiperWrapper = document.getElementById('pic');
	//创建节点
	for(var i = 0; i < aObj.length; i++) {
		/*console.log(aObj[i].img);
		//创建子元素div
		var oDiv=document.createElement('div');
		oDiv.className="swiper-slide";
		var oA=document.createElement('a');
		oA.href="#";
		var  oImg=document.createElement('img');
		oImg.src=aObj[i].img;
		oA.appendChild(oImg);
		oDiv.appendChild(oA);
		oSwiperWrapper.appendChild(oDiv);*/
	}
}

var url = "http://10.0.161.157:3000/test/my/data";
xhr = createXML();
xhr.open("GET", url, true);
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		console.log(xhr.responseText) //json字符串
			//创建节点,显示在页面上

	}
}