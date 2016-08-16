//JS代码，每行都有注释
window.onload = function(){
 var data = {     //模拟后台数据 的一个JSON格式的文件
  "data":[
   {"src":"1.png"},
   {"src":"2.png"},
   {"src":"3.png"},
   {"src":"4.png"},
   {"src":"5.png"},
   {"src":"6.png"},
   {"src":"7.png"},
   {"src":"8.png"}
  ]
 };
 window.onscroll = function(){
  if(checkScroll()){   //判断是否具备滚动加载得条件
   var oParent = document.getElementById('container');
   for(var i=0; i<data.data.length; i++){
    var div1 = document.createElement('div'); //创建div元素
    div1.className = 'pin';     //设置class
    oParent.appendChild(div1);
    var div2 = document.createElement('div');//创建div元素
    div2.className = 'div-box';
    div1.appendChild(div2);
    var imgs = document.createElement('img');//创建img元素
    imgs.style.width = '300px';
    imgs.src = 'img/'+data.data[i].src; //设置读取路径
    div2.appendChild(imgs);
    var p = document.createElement('p');//创建p元素
    p.innerHTML = '白超华-博客园';
    div2.appendChild(p);
   }
   waterfall('container','pin');  //--注意 别忘了这句，当滚动时候就执行
  }
 }
 waterfall('container','pin');
}
function waterfall(parent, box){
 var oParent = document.getElementById(parent);//获取父级对象
 var aBox = getByClass(oParent,box);//获取所有class为pin的盒子的集合
 var boxWidth = aBox[0].offsetWidth;//获取一个盒子的宽
 var pageWidth = document.body.clientWidth||document.documentElement.clientWidth;//获取可视区宽
 var cols = Math.floor(pageWidth/boxWidth);//获得列数
 var arrH = [];//用于存放盒子的高

 for(var i=0; i<aBox.length; i++){
  if(i<cols){//当小于第一列个数的时候
   arrH.push(aBox[i].offsetHeight);
  } else {
   var minH = Math.min.apply(null,arrH);//得到数组中盒字的最小高度minH;
   var index = getMinIndex(arrH,minH);

   aBox[i].style.position = 'absolute';//设置绝对定位
   aBox[i].style.top = minH+'px';//设置top，就是最小高度
   aBox[i].style.left = aBox[0].offsetWidth*index+'px';//设置left，就是一个盒子的宽*index索引数
   arrH[index]+=aBox[i].offsetHeight; //更新新添加盒字后的列高
  }
 }
}
//通过父级获取class
function getByClass(parent, classname){
 var aClass = parent.getElementsByTagName('*');
 var arr = [];

 for(var i=0; i<aClass.length; i++){
  if(aClass[i].className == classname){
   arr.push(aClass[i]);
  }
 }
 return arr;
}
//最小值的索引index
function getMinIndex(arr,val){
 for( i in arr){
  if(arr[i] == val){
   return i;
  }
 }
}
//
function checkScroll(){
 var oParent = document.getElementById('container');
 var aBox = getByClass(oParent,'pin');
 var lastBoxHeight = aBox[aBox.length-1].offsetTop;// 当滚到到这个距离时候就开始加载
 var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//兼容的滚动距离
 var documentHeight = document.documentElement.clientHeight; //页面高度
 if(lastBoxHeight<scrollTop+documentHeight){
  return true;
 }
}