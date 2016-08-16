//底部hover事件
			var aA=document.getElementById('footer1').children[0].children;
			for (var i = 0; i < aA.length; i++) {
				aA[i].onclick=function(){
					for (var j = 0; j < aA.length; j++) {
						aA[j].style.color="#969696";
					}
					this.style.color="#FF5722";
				}
			}