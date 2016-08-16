/******************************购买页面*********************************************************/
window.onload = function() {

	/*****************点击加减号时总计发生改变**************************************/
	var oCut = document.getElementById('cut');
	var oAdd = document.getElementById('add');
	//单价对象里面的值
	var oPrice = parseFloat(document.getElementById('price').innerHTML.substring(4));
	//数量对象里面的值
	var oInNum = document.getElementById('inNum');
	var oPrice3 = document.getElementById('price3');
	//总计对象
	var oSum = document.getElementById('sum');

	//上门服务费用
	var oDoorServiceMoney = 0;
	//总计费用=单间*数量+上门服务费用
	var oSumMoney;

	SumMoney();
	//数量增加
	oAdd.onclick = function() {
		oInNum.value = parseInt(oInNum.value) + 1;
		SumMoney();

	}

	//数量减少
	oCut.onclick = function() {
		if (oInNum.value != 1) {
			oInNum.value = parseInt(oInNum.value) - 1;
		} else {
			$('#noZero').css('display', 'block')
				.animate({
					opacity: 0
				}, 1000, 'linear', function() {
					$('#noZero').css('display', 'none').css('opacity', 1);
				});
		}
		SumMoney();

	}

	//服务方式
	oPrice3.onchange = function() {
		var oStoreAdd = document.getElementsByClassName('storeAdd')[0];
		if (oPrice3.value == '1') {
			oDoorServiceMoney = 30;
			oStoreAdd.style.display = "none";
			SumMoney();
		} else if (oPrice3.value == '2') {
			if (oDoorServiceMoney == 30) {
				oSumMoney = oSumMoney.toFixed(2) - 30;
			}
			oDoorServiceMoney = 0;
			SumMoney();
			oStoreAdd.style.display = "block";
		} else if (oPrice3.value == '0') {
			if (oDoorServiceMoney == 30) {
				oSumMoney = oSumMoney.toFixed(2) - 30;

			}
			oDoorServiceMoney = 0;
			SumMoney();
			oStoreAdd.style.display = "none";
		}
	}

	//总计
	function SumMoney() {
		oSumMoney = oPrice * parseInt(oInNum.value) + oDoorServiceMoney;
		oSum.innerHTML = oSumMoney.toFixed(2);
	}

	/********************输入手机号时的*****************************88*/
	var oPhoneNum = document.getElementById('phoneNum');

	oPhoneNum.onblur = function() {
		var oPhone1 = document.getElementsByClassName('phone1')[0];
		var reg = /^1[358]\d{9}$/g; /*/^1[358]\d{9}$/g*/
		var str = oPhoneNum.value;
		if (reg.test(str) == "" && reg.test(str) == false) {

			oPhone1.style.visibility = "visible";

		} else {
			oPhone1.style.visibility = "hidden";
		}
	}

	/********************点击支付方式*****************************88*/
	var aPay = document.getElementById('pay').children;
	/*for (var i = 0; i < aPay.length; i++) {
		aPay[i].onclick = function() {
			alert(this.className)
			if (this.className == "li2 unsel") {
				
				this.className = "li2 sel";
				this.previousElementSibling.className = "li1 unsel";
				this.previousElementSibling.children[0].children[2].style.visibility="hidden";
				this.children[1].style.visibility="visible";
			} else{
				this.className ="li1 unsel";
				this.nextElementSibling.children[0].children[1].style.visibility="hidden";
				this.children[0].children[2].style.visibility="visible"
			}
		}
	}*/
var oDanXuan=document.getElementsByClassName('danxuan')[0];
	aPay[0].onclick=function(){
		aPay[0].className = "li1 sel";
		aPay[1].className ="li2 unsel";
				aPay[0].nextElementSibling.children[1].style.visibility="hidden";
				aPay[0].children[0].children[2].style.visibility="visible";
				oDanXuan.style.visibility="visible";
	}
	aPay[1].onclick=function(){
		aPay[0].className = "li1 unsel";
		aPay[1].className ="li2 sel";
				aPay[1].previousElementSibling.children[0].children[2].style.visibility="hidden";
				aPay[1].children[1].style.visibility="visible";
				oDanXuan.style.visibility="hidden";
	}
}