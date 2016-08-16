window.onload = function() {
	/*******************查看电话完整信息**************************88*/
	var oSeePhone = document.getElementById('seePhone');
	var phNum = document.getElementById('phNum');
	oSeePhone.onclick = function() {

			phNum.innerHTML = "13241105008<span class='blue'>联系我时，请说是在360同城帮上看到的，谢谢！</span>"
			this.innerHTML = "";
		}
		/*******************查看地图**************************88*/
	var oMap = document.getElementById('createMap');
	var oZhe = document.getElementById('zhe');
	var oContainerMap = document.getElementById('containerMap');
	var oClose = document.getElementById('close');
	var oClose1 = document.getElementById('close1');
	var oClientWidth = document.body.offsetWidth;
	var oClientHeight = document.body.offsetHeight;
	oMap.onclick = function() {
		oZhe.style.display = "block";
		oZhe.style.zIndex = "2";
		oZhe.style.width = oClientWidth + "px";
		oZhe.style.height = oClientHeight + "px";
		oContainerMap.style.display = "block";
		oContainerMap.style.zIndex = "3222";
		oContainerMap.style.opacity = 1;
		showMap();

		function showMap() {
			var map = new AMap.Map('map', {
				zoom: 10,
				center: [116.39, 39.9]
			});
			var marker = new AMap.Marker({
				position: [116.65947318, 39.89266176],
				map: map,
				icon: new AMap.Icon({
					size: new AMap.Size(40, 50), //图标大小
					image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
					imageOffset: new AMap.Pixel(0, -60)
				})
			});
			var infowindow = new AMap.InfoWindow({
				content: '<h3>顺通电脑维修</h3><p>主营：电脑维修，电脑周边配件，系统... </p><p>地址：北京通州区果园环岛葛布店北里10号楼底商</p>',
				offset: new AMap.Pixel(0, -30),
				size: new AMap.Size(230, 0)
			});
			var clickHandle = AMap.event.addListener(marker, 'click', function() {

				infowindow.open(map, marker.getPosition());
			});
			AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
				var toolBar = new AMap.ToolBar();
				var scale = new AMap.Scale();
				map.addControl(toolBar);
				map.addControl(scale);
			});
		}

	}

	function hidden() {
		//关闭遮罩层 关闭地图
		oZhe.style.display = "none";
		oContainerMap.style.display = "none";

	}
	oClose.onclick = hidden;
	oClose1.onclick = hidden;

	/*****************滚动滚轮时，交易评价，到顶部定位    300*****************************/
	var oUl = document.getElementById('product');
	var aLi = oUl.children;
	window.onscroll = function() {
		var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (oScrollTop >= 305) {
			oUl.style.position = "fixed";
			oUl.style.top = "0px";
		}
		if (oScrollTop < 305) {
			oUl.style.position = "static";
		}
	}
	
	
	
	/*for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick=function(){
			oUl.style.position="fixed";
			oUl.style.top="0px";
			
		}
	}*/

}