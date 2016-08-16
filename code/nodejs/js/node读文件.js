/*var fs=require('fs');
var data=fs.readFile('./data.txt','utf-8',function(){
	console.log(data);
});  //同步读取  
console.log("读取的文件是：")


var setver=http.createServer*/
/*建立一个http服务器
 * 
 * var http=require('http');

                                                                                  
    http.createServer(function (req, res) { 
      res.writeHead(200 , {'Content-Type': 'text/html'}); 
      res.write('<h1>Node.js</h1>'); 
      res.end('<p>Hello World</p>'); 
     }).listen(3000 );                                                                
    console.log("HTTP server is listening at port 3000."); 
    */
   
   
  /*************************** 异步方式读取一个文件 **********************************/
   /*  下面读取文件操作和 console.log('end.')一起执行，谁先回来谁就先显示在浏览器中
     var fs = require('fs');      //加载一个fs模块
     //异步方式读取一个文件  
    fs.readFile('../../../zsnnode/data.txt', 'utf-8', function (err, data) { 
      if (err) { 
       console.error(err); 
      } else { 
       console.log(data);                                                     
      } 
    }); 
    console.log('end.'); 
    */
   
   
      /**************************************同步方式读取一个文件***********************/
   //下面读取文件操作先执行执行，  console.log('end.')后执行  从上往下执行  上面的执行完了  下面的才开始执行
   //注意同步读取文件没有回调函数
     var fs = require('fs');    
     //同步方式读取一个文件  
   	var data=fs.readFileSync('../../../zsnnode/data.txt', 'utf-8'); 
   	console.log(data)
    console.log('end.'); 
   
