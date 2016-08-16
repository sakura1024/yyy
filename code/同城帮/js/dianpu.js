"use strict";
window.onload = function() {

	/******************************轮播图*********************************************************/
	//轮播图的全局变量
	var count = 1;
	var timer = null;
	timer = setInterval(next, 1000);
	var aCSpan = document.getElementById('cercile').children;
	var oLbImg = document.getElementById('lbimg');
	for (var i = 0; i < aCSpan.length; i++) {
		aCSpan[i].index = i;
		aCSpan[i].onclick = function() {
			oLbImg.src = "img/" + (this.index + 1) + "png";

			for (var j = 0; j < aCSpan.length; j++) {
				aCSpan[j].style.background = "#97A6E5";
			}
			this.style.background = "#333";

		}

	}

	//获取下个图片
	function next() {
		count++;
		if (count == 6) {
			count = 1;
		}
		changeSrc();
		changeCirBgd();

	}

	//改变图片src
	function changeSrc() {
		var oLbImg = document.getElementById('lbimg');
		oLbImg.src = 'img/' + count + '.png';
	}

	//改变小圆点背景色
	function changeCirBgd() {
		var aCSpan = document.getElementById('cercile').children;
		for (var i = 0; i < aCSpan.length; i++) {
			aCSpan[i].style.background = "#333333";
		}
		aCSpan[count - 1].style.background = "#97A6E5";
	}
	/******************************************88获取json里面的数据********************************/
	var Arrobi;
	//创建经纬度对象供地图显示店铺信息使用
	var aStorAddMap = [];
	var url = "data/1.json";
	var xhr;
	getJsonFile(url); //页面初始化时  1.json
	function getJsonFile(url) {
		xhr = createXML();
		xhr.open("GET", url, true);
		xhr.send();
		xhr.onreadystatechange = showjson;
	}
	/**************************翻页效果的实现*****************************************/
	turnPage();

	function turnPage() {

		var aPage = document.getElementById('page').children;
		for (var i = 0; i < aPage.length - 1; i++) {
			aPage[i].index = i + 1;
			aPage[i].onclick = function() {
				var _this = this;
				removeOldShowNew(this.index, _this)
			};

			//删除旧信息增加新信息，并且下面的页数也跟着变色
			function removeOldShowNew(num, this1) {
				//先删除显示的店铺信息
				var oRepairl = document.getElementById('repair-list');
				var len = oRepairl.children.length;
				for (var j = 0; j < len; j++) {
					oRepairl.removeChild(oRepairl.firstElementChild);
				}
				//添加新的json数据
				url = 'data/' + num + '.json';
				getJsonFile(url);
				//更改翻页按钮的背景色
				for (var p = 0; p < aPage.length - 1; p++) {
					aPage[p].children[0].className = "";
				}
				this1.children[0].className = "active";

			}

			nextPage();
			//下一页点击事件
			function nextPage() {
				var oNextPage = document.getElementById('nextPage');
				oNextPage.onclick = function() {
					//从上一个url中获取pageNum
					var page = Number(url.substring(5, 7)) + 1;
					var pageNum = Number(url.substring(5, 6));
					if (page == 11) {
						pageNum = 0;
					}
					var _this = document.getElementById('page').children[pageNum];
					removeOldShowNew(pageNum + 1, _this);

				};
			}
		}

	}

	/********** **************************************店铺上面的成交量排序问题**************************************/
	//店铺上面的按成交量之类的
	var oSort = document.getElementById('sort');
	var aLi = oSort.getElementsByTagName('li');
	for (var i = 0; i < 3; i++) {
		aLi[i].onclick = function() {
			for (var i = 0; i < 3; i++) {
				aLi[i].className = "";
			}
			this.className = "default";
		}
	}

	/**************************获取高德地图*******************************************************/

	//获取高德地图
	var btn = document.getElementById('btn111');
	var zhe = document.getElementById('zhezhao');
	var highmap = document.getElementById('highmap');
	var bodyWidth = document.body.offsetWidth + "px";
	var bodyHeight = document.body.offsetHeight + "px";
	var close = document.getElementById('close');

	//地图模式
	btn.onclick = function() {
		showZhezhao();
		showMap();
	}
	close.onclick = hidden;

	/**********************************店铺从后台json获取过来创建节点的各种方法************************************************************/
	//封装一个xml函数
	function createXML() {
		//		var xhr;
		try {
			xhr = new XMLHttpRequest();

		} catch (e) {
			xhr = new ActiveXObiect("Microsoft.XMLHTTP");
		}
		return xhr;
	}

	//通过ison获取店铺信息，显示在店铺列表里
	function showjson() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText) //ison字符串
			showStore();
		}
	}

	//创建节点显示店铺具体操作
	function showStore() {
		//iSON.parse(xhr.responseText)  对象
		Arrobi = JSON.parse(xhr.responseText).shop_data;
		var oRepairl = document.getElementById('repair-list');

		//Arrobi.length
		for (var i = 0; i < 5; i++) {

			//创建li
			var oLi = document.createElement('li');

			//创建自定义列表
			var oDl = document.createElement('dl');

			var oDt = document.createElement('dt');
			oDt.setAttribute('class', 'dt');

			//创建dt里面的元素
			var oA = document.createElement('a');
			var oImg = document.createElement('img');
			//为dt添加ison内容
			oImg.src = Arrobi[i].shop_ico;
			oA.href = Arrobi[i].shop_addr;
			//Arrobi[i].name;
			//Arrobi[i].level;
			oA.appendChild(oImg);
			oDt.appendChild(oA);
			oDl.appendChild(oDt);

			var oDd = document.createElement('dd');
			oDd.setAttribute('class', 'dd');
			//创建自定义列表里面的dd-l
			//创建dd里面的元素div1   
			var oDiv = document.createElement('div');
			oDiv.setAttribute('class', 'dd-l  fl');
			var oA = document.createElement('a');
			oA.setAttribute('class', 'dd-first')
			oA.href = Arrobi[i].shop_addr;
			oA.innerHTML = Arrobi[i].shop_name;
			oDiv.appendChild(oA);

			var oSpan = document.createElement('span');
			oSpan.innerHTML = "店铺等级:   ";
			oDiv.appendChild(oSpan);

			/*****************店铺等级问题****************************************/
			switch (Arrobi[i].level) {
				case 1:
					level(19);
					break;
				case 2:
					for (var j = 0; j < 2; j++) {
						level(19);
					}
					break;
				case 3:

					for (var j = 0; j < 3; j++) {
						level(19);
					}
					break;
				case 4:
					for (var j = 0; j < 4; j++) {
						level(19);
					}
					break;
				case 5:
					for (var j = 0; j < 5; j++) {
						level(19);
					}
					break;
				case 6:
				case 7:
					level(38);

					break;
				case 8:
				case 9:
					for (var j = 0; j < 2; j++) {
						level(38);
					}
					break;
				case 10:
				case 11:
					for (var j = 0; j < 2; j++) {
						level(38);
					}
					break;
				case 12:
				case 13:
					for (var j = 0; j < 4; j++) {
						level(38);
					}
					break;
				case 14:
				case 15:
					for (var j = 0; j < 5; j++) {
						level(38);
					}
					break;
				case 16:
				case 17:
				case 18:
					level(80);
					break;
				case 19:
				case 20:
				case 21:
					for (var j = 0; j < 2; j++) {
						level(80);
					}
					break;
				case 22:
				case 23:
				case 24:
					for (var j = 0; j < 3; j++) {
						level(80);
					}
					break;
				case 25:
				case 26:
				case 27:
					for (var j = 0; j < 4; j++) {
						level(80);

					}
					break;
				case 28:
				case 29:
				case 30:
					for (var j = 0; j < 5; j++) {
						level(80);
					}
					break;
				case 31:
				case 32:
				case 33:
				case 34:
					level(99);
					break;
				case 35:
				case 36:
				case 37:
				case 38:
					for (var j = 0; j < 2; j++) {
						level(99);
					}
					break;
				case 39:
				case 40:
				case 41:
				case 42:
					for (var j = 0; j < 3; j++) {
						level(99);
					}
					break;
				case 43:
				case 44:
				case 45:
				case 46:
					for (var j = 0; j < 4; j++) {
						level(99);
					}
					break;
				case 47:
				case 48:
				case 49:
				case 50:
					for (var j = 0; j < 5; j++) {
						level(99);
					}
					break;
				default:
					break;
			}

			
			//店铺等级函数
			function level(str) {
				var oSpan1 = document.createElement('span');
				oSpan1.style.display = "inline-block";
				oSpan1.style.width = "16px";
				oSpan1.style.height = "17px";
				oSpan1.style.background = "url(img/icon.png)no-repeat 0px -" + str + "px";
				oDiv.appendChild(oSpan1);
			}
/*****************店铺等级问题****************************************/
			var oA1 = document.createElement('a');
			//				var oI=document.createElement('i');
			//				oI.src=""
			var oP1 = document.createElement('p');
			var oP2 = document.createElement('p');

			oA1.href = Arrobi[i].shop_addr;
			oP1.setAttribute('class', 'p-first')
			oP1.innerHTML = "主营:" + Arrobi[i].shop_desc;
			oP2.innerHTML = "地址:" + Arrobi[i].addr_detail;

			oDiv.appendChild(oA1);
			//			oDiv.appendChild(oSpan);
			oDiv.appendChild(oP1);
			oDiv.appendChild(oP2);
			oDd.appendChild(oDiv);
			oDl.appendChild(oDd);

			//创建dd里面的元素div2(只是一个人气的问题)
			var oDiv = document.createElement('div');
			oDiv.setAttribute('class', 'dd-m  fl');

			var oDiv1 = document.createElement('div');
			var oImg = document.createElement('img');
			oImg.src = "img/money.png";
			var oSpan = document.createElement('span');
			oSpan.innerHTML = "先行赔付";

			oDiv1.appendChild(oImg);
			oDiv1.appendChild(oSpan);

			var oDiv2 = document.createElement('div');
			var oImg = document.createElement('img');
			oImg.src = "img/d.png";
			var oSpan = document.createElement('span');
			oSpan.innerHTML = "同城帮认证";

			oDiv2.appendChild(oImg);
			oDiv2.appendChild(oSpan);

			var oP = document.createElement('p');
			oP.setAttribute("class", "renqi")
			oP.innerHTML = "人气：" + Arrobi[i].shop_visit + "次浏览";

			oDiv2.appendChild(oP);
			oDiv.appendChild(oDiv1);
			oDiv.appendChild(oDiv2);
			oDd.appendChild(oDiv);

			//创建dd里面的元素div3()
			var oDiv = document.createElement('div');
			oDiv.setAttribute('class', 'dd-r  fr');
			var oA = document.createElement('a');
			oA.href = Arrobi[i].shop_addr;
			oA.innerHTML = "进入店铺";
			oDiv.appendChild(oA);
			oDd.appendChild(oDiv);
			oDl.appendChild(oDd);

			oLi.appendChild(oDl);
			oRepairl.appendChild(oLi);

			//将经度纬度放在一个数组里面
			aStorAddMap[i] = {};
			aStorAddMap[i].map_latitude = Arrobi[i].map_latitude;
			aStorAddMap[i].map_longitude = Arrobi[i].map_longitude;
			//li鼠标移入移出时的背景色改变
			oLi.onmouseover = function() {
				this.style.background = "#FAFAFA";
				this.getElementsByClassName('dd-r')[0].style.display = "block";
			}
			oLi.onmouseout = function() {
				this.style.background = "";
				this.getElementsByClassName('dd-r')[0].style.display = "none";
			}
		}
	}

	/*高德地图*/
	//显示遮罩层,显示地图页面
	function showZhezhao() {
		//遮罩层出来
		zhe.style.display = "block";
		zhe.style.zIndex = "1";
		zhe.style.width = bodyWidth;
		zhe.style.height = bodyHeight;
		var oHighmap = document.getElementById('highmap');
		oHighmap.style.display = "block"
		oHighmap.style.zIndex = "222";
	}
	//关闭按钮
	function hidden() {
		//关闭遮罩层 关闭地图
		document.getElementById('highmap').style.display = "none";
		zhe.style.display = "none";

	}

	//常见地图对象
	function showMap() {
		var map = new AMap.Map('map', {
			zoom: 10,
			center: [116.39, 39.9]
		});
		for (var i = 0; i < 5; i++) {

			//iosn数据对象       Arrobi  

			(function(n) {
				var marker = new AMap.Marker({
					position: [aStorAddMap[n].map_longitude, aStorAddMap[n].map_latitude],
					map: map,
					icon: new AMap.Icon({
						size: new AMap.Size(40, 50), //图标大小
						image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
						imageOffset: new AMap.Pixel(0, -60)
					})
				})
				var infowindow = new AMap.InfoWindow({
					content: '<h3>' + Arrobi[n].shop_name + '</h3><p>主营：' + Arrobi[n].shop_desc + '</p>' + '<p>地址：' + Arrobi[n].addr + '</p>',
					offset: new AMap.Pixel(0, -30),
					size: new AMap.Size(230, 0)
				});

				var clickHandle = AMap.event.addListener(marker, 'click', function() {

					infowindow.open(map, marker.getPosition());
				});

			})(i);
		}
		AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
			var toolBar = new AMap.ToolBar();
			var scale = new AMap.Scale();
			map.addControl(toolBar);
			map.addControl(scale);
		});
	}

}