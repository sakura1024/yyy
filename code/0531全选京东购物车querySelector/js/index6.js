window.onload = function() {
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	var oPink = document.getElementById('pink');
	var oBlue = document.getElementById('blue');
	changeImg();
	addBorder();
	oPrev.onclick = prev;
	oNext.onclick = next;
	var count = 1;
	//上一个
	function prev() {

		if (count <= 1) {
			return;
		} else {
			count--;
			var oUl = document.getElementsByTagName('ul')[0];
			oUl.style.left = oUl.offsetLeft + 58 + 'px';
		}

	}

	//下一个
	function next() {

		if (count >= 3) {
			return;
		} else {
			count++;
			var oUl = document.getElementsByTagName('ul')[0];
			oUl.style.left = oUl.offsetLeft - 58 + 'px';
		}

	}

	function changeImg() {
		var aLi = document.getElementsByTagName('li');
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].index = i;
			aLi[i].onmouseover = function() {
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].style.border = "2px solid #fff";
				}
				var oImg = document.getElementsByTagName('img')[0];
				oImg.src = "img/0" + (this.index + 1) + ".jpg";
				aLi[this.index].style.border = "2px solid red";
			};
		}
	}

	function addBorder() {
		var oRight = document.getElementsByClassName('right')[0];
		var aSpan = oRight.getElementsByTagName('span');
		for (var i = 0; i < aSpan.length; i++) {
			aSpan[i].index = i;
			aSpan[i].onmouseover = function() {
				aSpan[this.index].style.border = "2px solid red";
				aSpan[this.index].style.color = "red";
				aSpan[this.index].style.padding = "0px";
			}
			aSpan[i].onmouseout = function() {
				aSpan[this.index].style.color = "black";
			}

			aSpan[i].onclick = function() {
				var aI = oRight.getElementsByTagName('i');
				for (var i = 0; i < aI.length; i++) {
					aI[i].style.visibility = "hidden";
				}
				aI[this.index].style.visibility = "visible";
				for (var i = 0; i < aSpan.length; i++) {
					aSpan[i].style.border = "1px solid #ccc";
				}
				aSpan[this.index].style.border = "2px solid red";
				aSpan[this.index].style.color = "black";
				aSpan[this.index].style.padding = "0px";
			}
		}
	}
	add();
	cut();

	function add() {
		//获取运算那的id
		var oOp = document.getElementById('op');
		var aDiv = oOp.getElementsByTagName('div');

		aDiv[0].onclick = function() {
			//获取计数的div  点击加号时  里面的数值加一操作
			var oProNUm = document.getElementById('proNum');
			oProNUm.innerHTML = parseInt(oProNUm.innerHTML) + 1;

		}

	}
	//减法
	function cut() {
		//获取运算那的id
		var oOp = document.getElementById('op');
		var aDiv = oOp.getElementsByTagName('div');
		aDiv[1].onclick = function() {
			var oProNUm = document.getElementById('proNum');
			if ( parseInt(oProNUm.innerHTML)<=1) {
				return;
			} else{
				oProNUm.innerHTML = parseInt(oProNUm.innerHTML) - 1;
			}
		}
	}

}