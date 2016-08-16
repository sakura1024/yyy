<?php
$path = "./data/p1.json";
$data = file_get_contents($path);
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : '';
if($callback){
	echo $callback.'('.json_encode($data).')';	
}else{
	echo json_encode($data);
}


