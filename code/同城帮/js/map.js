window.onload=function(){
	//			var map = new AMap.Map('container');
			var btn = document.getElementById('btn111');
			var zhe = document.getElementById('zhezhao');
			var highmap=document.getElementById('highmap');
			var clientWidth = document.documentElement.clientWidth + "px";
			var clientHeight = document.documentElement.clientHeight + "px";
			var close = document.getElementById('close');

			//地图模式
			btn.onclick = function() {
				btn.style.zIndex = "-1";
				//遮罩层出来
				zhe.style.display = "block";
				zhe.style.zIndex = "1";
				zhe.style.width = clientWidth;
				zhe.style.height = clientHeight;
				zhe.style.left = "-8px";
				zhe.style.top = "-16px";

				var oHighmap = document.getElementById('highmap');
				oHighmap.style.display = "block"
				oHighmap.style.zIndex = "222";

				showMap();
			}
			close.onclick = hidden;
			//关闭按钮
			function hidden() {
				//关闭遮罩层 关闭地图
				document.getElementById('highmap').style.display = "none";
				zhe.style.display = "none";

			}

			function showMap() {
				var map = new AMap.Map('map', {
					zoom: 10,
					center: [116.39, 39.9]
				});
				var marker = new AMap.Marker({
					position: [116.490983, 39.989628],
					map: map
				});
				var marker1 = new AMap.Marker({
					position: [116.500984, 39.989628],
					map: map
				});
				var marker2 = new AMap.Marker({
					position: [116.510986, 39.989628],
					map: map
				});
				var infowindow = new AMap.InfoWindow({
					content: '<h3>高德地图</h1><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
					offset: new AMap.Pixel(0, -30),
					size: new AMap.Size(230, 0)
				});
				var infowindow1 = new AMap.InfoWindow({
					content: '<h3>高德地图</h1><div>mark1高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
					offset: new AMap.Pixel(0, -30),
					size: new AMap.Size(230, 0)
				});
				var infowindow2 = new AMap.InfoWindow({
					content: '<h3>高德地图</h1><div>mark2高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
					offset: new AMap.Pixel(0, -30),
					size: new AMap.Size(230, 0)
				});
				//						infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));
				var clickHandle = AMap.event.addListener(marker, 'click', function() {

					infowindow.open(map, marker.getPosition());
				})
				var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
					infowindow1.open(map, marker1.getPosition())
						//				
				})
				var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
					infowindow2.open(map, marker2.getPosition())
						//				
				})
				AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
					var toolBar = new AMap.ToolBar();
					var scale = new AMap.Scale();
					map.addControl(toolBar);
					map.addControl(scale);
				})
			}
}
			
