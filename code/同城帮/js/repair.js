window.onload=function(){
	var oHeader=document.getElementById('header');
	window.onscroll=function(){
		var oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (oScrollTop>=32) {
			oHeader.style.position="fixed";
			oHeader.style.top="0px";
			oHeader.style.boxShadow="0px 3px 15px #ccc";
		} else if(oScrollTop<32){
			oHeader.style.position="static";
			oHeader.style.boxShadow="0px 0px 0px white";
		}
	}
}
