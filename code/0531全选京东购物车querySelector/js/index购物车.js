window.onload = function() {
	adddown();
	//数量加减 相应的小计也加减
	function adddown() {
		//根据类名获取标签+-的对象  当前该数组长度为4  可以根据取余%2  余数为0的 时候-  余数为1的时候为+                                    
		var aPer = document.getElementsByClassName('oper');
		var aShowNum = document.getElementsByClassName('showNum');
		var oPrice = document.getElementsByClassName('price');
		var aStotle = document.getElementsByClassName('stotle');

		for (var i = 0; i < aPer.length; i++) {
			aPer[i].index = i;
			if (i % 2 == 0) { //aper下标为 0 1时   showNum[0]   4 5
				//aper偶数时-
				aPer[i].onclick = function() {
					var count = parseInt(this.index / 2);
					if (aShowNum[count].innerHTML == 1) {
						//alert("商品数量不能为0");
						aShowNum[count].innerHTML = 1;
					} else {
						//注意this.index位置  span标签里的数量
						aShowNum[count].innerHTML = parseInt(aShowNum[count].innerHTML) - 1;
						//小计=单价*数量
						aStotle[count].innerHTML = (parseInt(aShowNum[count].innerHTML) * oPrice[count].innerHTML).toFixed(2);
					}
				}
			} else { //aper下标为 2 3时   showNum[1]
				//per奇数时+
				aPer[i].onclick = function() {
					var count = parseInt(this.index / 2);
					aShowNum[count].innerHTML = parseInt(aShowNum[count].innerHTML) + 1;
					//小计=单价*数量
					aStotle[count].innerHTML = (parseInt(aShowNum[count].innerHTML) * oPrice[count].innerHTML).toFixed(2);

				}
			}
		}
		return aStotle.innerHTML; //返回的是一个小计的数组
	}
	choseAll();
	//全选按钮那  全选按钮选中时  sum=所有的sTotle相加   不选中时   sum=0；
	var oSum = document.getElementById('sum');

	function choseAll() {
		var oBtn = document.getElementById('choseall');
		
		oBtn.onclick = function() {
			var sum = 0;
			if (this.checked) {
				var achoseOne = document.getElementsByName('chooseOne');
				for (var i = 0; i < achoseOne.length; i++) {
					achoseOne[i].checked = true;
					//如果被选中调用加法函数
//					adddown();
//					alert(asum);
					var sTot = document.getElementsByClassName('stotle')[i].innerHTML;
					sum = parseFloat(sum) + parseFloat(sTot);
//					
					oSum.innerHTML = sum.toFixed(2) + "元";
				}

			} else {
				var achoseOne = document.getElementsByName('chooseOne');
				for (var i = 0; i < achoseOne.length; i++) {
					achoseOne[i].checked = false;
				}
				oSum.innerHTML = 0;
			}

		}
	}
	choseone();
	//单独选某个按钮时
	function choseone() {
		var sum = 0;
		var count = 0; //用来判断全选按钮是否要被选中
		var achoseOne = document.getElementsByName('chooseOne');
		var chooseAll = document.getElementById('choseall');
		for (var i = 0; i < achoseOne.length; i++) {
			achoseOne[i].index = i;
			achoseOne[i].onclick = function() {
				if (this.checked) {
					//用来计数  count=2时  说明两个按钮均被选中  所有应该全选
					count++;
					var sTot = document.getElementsByClassName('stotle')[this.index].innerHTML;
					sum = parseFloat(sum) + parseFloat(sTot);
					oSum.innerHTML = sum.toFixed(2) + "元";
					if (count == achoseOne.length) {
						chooseAll.checked = true;

					}
				} else {
					var sTot = document.getElementsByClassName('stotle')[this.index].innerHTML;
					sum = parseFloat(sum) - parseFloat(sTot);
					oSum.innerHTML = sum.toFixed(2) + "元";
					if (count != achoseOne.length) {
						choseAll.checked = false;
					}
				}

			}

		}
	}
}