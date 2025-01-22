<?php
// 關閉錯誤訊息
error_reporting(0);
// 取得欄位值
$name = (isset($_POST["name"]) ) ? $_POST["name"] : $_GET["name"];
$type = (isset($_POST["type"]) ) ? $_POST["type"] : $_GET["type"];
if ($type == "date")
   $dt = date("m/j/Y");
else
   $dt = date("h:i:s A");
header('Content-type: application/json');
$response = array();
$response[0] = array(
     'date' => $dt,
     'name'=> $name
);
echo json_encode($response);
?>  