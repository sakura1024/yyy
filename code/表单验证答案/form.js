function ch(ob){
	ob.value="";
	ob.style.color="black";
}
function checkForm(){
	var str,reg;
	var form1=document.forms[0]
	//用户名验证
	str = form1.username.value;
	reg = /^(\w|[\u4e00-\u9fa5]|[-。]){3,20}$/
	if(reg.test(str)==false)
	{
		alert("用户名有误");
		return false;
	}
	//电子邮件验证
	str = form1.email.value;
	reg = /^\w+@\w+\.(\w+)?$/
	if(reg.test(str)==false)
	{
		alert("邮件格式不正确")
		return false;
	}
	//密码验证
	str = form1.pw1.value;
	reg = /^\w{3,16}$/
	if(reg.test(str)==false)
	{
		alert("密码不正确")
		return false;
	}
	//确认密码验证
	if(str!=form1.pw2.value)
	{
		alert("两次密码不一致")
		return false;
	}
	//身份证号码验证
	str = form1.code.value;
	reg = /^(\d{15}|\d{18})$/
	if(reg.test(str)==false)
	{
		alert("身份证号码不正确")
		return false;
	}
	//固定电话验证
	str = form1.phone.value;
	reg = /^(\d{4}-\d{7}|\d{3}-\d{8})$/
	if(reg.test(str)==false)
	{
		alert("固定电话不正确")
		return false;
	}
	//手机号不正确
	str = form1.tel.value;
	reg = /^1[358]\d{9}$/
	
	if(reg.test(str)==false)
	{
		alert("手机号不正确");
		return false;
	}
	//QQ号不正确
	str = form1.qq.value;
	reg = /^[1-9]\d{4,}$/
	if(reg.test(str)==false)
	{
		alert("QQ号不正确")
		return false;
	}
	//省必选一项 市必选一项
	str = form1.pro.value;
	if(str=="0")
	{
		alert("省必选一项")
		return false;
	}
	str = form1.city.value;
	if(str=="")
	{
		alert("市必选一项")
		return false;
	}
	//性别必选一项
	str = form1.sex;
	var b = false;
	for(i=0;i<str.length;i++)
	{
		if(str[i].checked==true)
		{
			b = true;
			break;
		}
	}
	if(b==false)
	{
		alert("性别必一项")
		return false;
	}
	//爱好必选三项
	str = form1.like;
	var count=0;
	for(i=0;i<str.length;i++)
	{
		if(str[i].checked==true)
		{
			count++;
		}
	}
	if(count<3)
	{
		alert("必选三项")
		return false;
	}
	//行业必选一项
	str = form1.hang.value;
	if(str=="")
	{
		alert("请选择一项")
		return false;
	}
	//验证出生日期
	str = form1.date.value
	reg = /^\d{4}-(0?[1-9]|1[0-2])-([1-9]|[0-2]\d|30|31)$/
	if(reg.test(str)==false)
	{
		alert("输入日期格式不正确")
		return false;
	}
	//上传图片
	str = form1.file.value
	reg = /^.+\.jpg$/
	if(reg.test(str)==false)
	{
		alert("图片格式不正确")
		return false;
	}
	
	//验证个人主页
	str = form1.single.value
	reg = /^http:\/\/(\w+\.)?\w+(\.\w+)+$/         //????w+(\.\w+)
	if(reg.test(str)==false)
	{
		alert("输入网址不正确");
		return false;
	}
	//验证自我介绍
	str = form1.intro.value
	if(str.length<50||str.length>200)
	{
		alert("字符数不合适")
		return false;
	}
	//验证验证码
	str = form1.yan.value.toUpperCase();
	str1 = document.getElementById("c").innerHTML.toUpperCase();
	if(str!=str1)
	{
		alert("验证码输入不正确")
		return false;

	}
	return true;
}
//二级联动
var arr1=['请选择','河北','河南']
var arr2 = new Array();
	arr2[0] = new Array('请选择')
	arr2[1] = new Array('承德','保定','邯郸','衡水')
	arr2[2] = new Array('安阳','南阳','洛阳') 
function show(){
	var s = document.getElementById('pro');
	for(i=1;i<arr1.length;i++)
	{
		var op = document.createElement("option");
			op.value=i;
			op.innerHTML=arr1[i];
			s.appendChild(op);
	}
}
function addCity(n){
	var c = document.getElementById("city");
	c.length=1;
	var arr3 = arr2[n]
	for(i=0;i<arr3.length;i++)
	{
		var op = document.createElement("option")
		op.value=i;
		op.innerHTML=arr3[i]
		c.appendChild(op);
	}
}