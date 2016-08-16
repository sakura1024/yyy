define(['text!../../view/fairyland.html', 'jquery', '../lib/bootstrap/js/bootstrap.js'], function(html, $) {
	//渲染页面
	function render() {
		$('#box').html(html);
	}

	function tabClick() {
		//上面选项卡被点击的时候，出现遮罩层
		var aFairyland = document.getElementById('fairyland').children[0].children[0].children;
		var oShade = document.getElementsByClassName('shade')[0];
		var oTabContent = document.getElementsByClassName('tabContent')[0];
		
		var oDefaultImg = document.getElementById('defaultImg');
		for(var i = 0; i < aFairyland.length; i++) {
			aFairyland[i].onclick = function() {
				oShade.style.display = "block";
				oTabContent.style.visibility="visible";
			}
		}
		oDefaultImg.onclick = function() {
			oShade.style.display = "none";
		}
	}

	function getData() {
		var oDefault = document.getElementById('defaultImg');
		var xmlhttp;
		if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET", "data/p2.json", true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				console.log(xmlhttp.responseText);
				console.log(JSON.parse(xmlhttp.responseText));
				var abj1 = JSON.parse(xmlhttp.responseText).data;
				for(var i = 0; i < abj1.length; i++) {
					oDefault.innerHTML += '<a href="#"><img src="' + abj1[i].img + '" />\
					<div class="div">\
					<div class="pull-left div1">\
					<p>' + abj1[i].name + '</p>\
					<p>' + abj1[i].address + '</p>\
				</div>\
				<div class="pull-right div2">\
					<i class="iconfont icon-zuobiao1"></i>\
					<span>' + abj1[i].dist + '公里</span>\
				</div></div></a>';
				}
			}
		}

	}
	return {
		render: render,
		tabClick: tabClick,
		getData: getData
	}
})