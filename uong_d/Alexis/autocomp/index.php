<?php
if(empty($_GET['q']))
	die();
header('Content-Type: application/json');
$file = file_get_contents('Title.json');
$titles = json_decode($file);
$found = preg_grep("/^".$_GET['q']."/i",$titles); 
$found = array_values($found);
$found = array_slice($found, 0, 5);
$json = json_encode($found);
echo $json; 
