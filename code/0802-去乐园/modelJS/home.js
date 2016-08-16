define(['text!../../view/home.html', 'jquery','bootstrap'], function(html, $) {
	//渲染页面
	function render() {
		$('#box').html(html);
	}
	//自己写的js
	function changeColor() {

		var aA = document.getElementById('footer').children;
		for(var i = 0; i < aA.length; i++) {
			aA[i].onclick = function() {
				for(var j = 0; j < aA.length; j++) {
					aA[j].style.color = "#919191";
				}
				this.style.color = "#f40";
			}
		}
	}
	//调取json
	function getData() {
		var oHeader=document.getElementById('header');
		var oDivision=document.getElementById('division');
		var oWonder=document.getElementsByClassName('wonder')[0];
		var xhr;
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//路径问题咋回事
		xhr.open("GET", "data/p1.json", true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				
				var aObj1=JSON.parse(xhr.responseText).slider[0];
				var aObj2=JSON.parse(xhr.responseText).arealist;
				var aObj3=JSON.parse(xhr.responseText).reclist;
				
				/* console.log(xhr.responseText);
				 console.log(aObj3.length);*/
//				 oHeader.innerHTML+='<a href= "#"><img src="'+aObj1.img+'" /></a>';
				 oHeader.innerHTML+='<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
			<ol class="carousel-indicators">\
				<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
				<li data-target="#carousel-example-generic" data-slide-to="1"></li>\
				<li data-target="#carousel-example-generic" data-slide-to="2"></li>\
			</ol>\

			<div class="carousel-inner" role="listbox">\
				<div class="item active">\
					<img src="'+aObj1.img+'"/>\
				</div>\
				<div class="item">\
					<img src="'+aObj1.img+'"/>\
				</div>\
				<div class="item">\
					<img src="'+aObj1.img+'"/>\
				</div>\
			</div>\
			<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
				<span class="glyphicon glyphicon-chevron-left span" aria-hidden="true" ></span>\
				<span class="sr-only"></span>\
			</a>\
			<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
				<span class="glyphicon glyphicon-chevron-right span" aria-hidden="true"></span>
				<span class="sr-only"></span>\
			</a>\
		</div>';
				 for (var i = 0; i < aObj2.length; i++) {
				 	oDivision.innerHTML+='<a href="#"><img src="'+aObj2[i].img+'" /></a>';
				 	
				 }
				 for (var i = 0; i < aObj3.length; i++) {
				 	//字符串拼接
				 	oWonder.innerHTML+='<a href="#"><img src="'+aObj3[i].img+'" /></a>'
				 }
			}
		}

	}
	return {
		render: render,
		changeColor: changeColor,
		getData:getData
	}
})