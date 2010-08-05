<?php
	$num = $_GET["num"];
	$name = "../maps/".$num;
	$str = file_get_contents($name);
	echo $str;
?>


