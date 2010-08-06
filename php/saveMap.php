<?php
	include("MapDAO.php");
	include("Map.php");
	$mdao = new MapDAO();
	$m = new Map();
	$m->setTiles($_POST['tiles']);
	$m->setName($_POST['name']);
	$mdao->insert($m);
?>