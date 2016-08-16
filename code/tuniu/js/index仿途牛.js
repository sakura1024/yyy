window.onload = function() {
	var oUl = document.getElementsByClassName('sub-nav')[0];
	var aLi = oUl.getElementsByTagName('li');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function() {

			//侧栏的出现与隐藏
			var oSubNavList = document.getElementsByClassName('sub-nav-list');
			for (var j = 0; j < oSubNavList.length; j++) {
				oSubNavList[j].style.visibility = "hidden";
			}
			oSubNavList[this.index].style.visibility = "visible";
			//li的背景变白  li的背景图改变
			/*
			for (var j = 0; j < aLi.length; j++) {
				var oA = aLi[j].getElementsByTagName('a')[0];
				var oI=oA.getElementsByTagName('i')[0];
				oA.style.color = "white";
				aLi[j].style.borderBottomColor = "#38414C";
				aLi[j].style.backgroundColor = "#202020";
				aLi[j].style.width="84px";
				aLi[j].style.left="0px";
				oI.style.backgroundPositionY = '0px';
			}
			var oA = aLi[this.index].getElementsByTagName('a')[0];
			oA.style.color = "#2EA536";
			var oI=aLi[this.index].getElementsByTagName('i')[0];
			aLi[this.index].style.borderBottomColor = "white";
			aLi[this.index].style.backgroundColor = "white";
			aLi[this.index].style.width="86px";
			aLi[this.index].style.left="-2px";
			oI.style.backgroundPositionY = '-25px';
			*/
		}

	}
}