<?php
	include("MapDAO.php");
	include("Map.php");
	$mdao = new MapDAO();
	$m = $mdao -> selectById($_GET['id']);
?>
<html>
	<head>
		<title></title>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/tileconsts.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/helpers.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/sprite.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/hero.js"></script>
<?php
	echo "<script type='text/javascript'>var map = stringToMap('{$m->getTiles()}');</script>";
?>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/init.js"></script>
	</head>
<body>
	<audio id="s_shot" src="sounds/Gun_Silencer.wav" autobuffer="autobuffer"></audio>
	<audio id="s_shell" src="sounds/41607shell.wav" autobuffer="autobuffer"></audio>
	<div id="debug">
	</div>
	

	<div id="hudbox">
		<span class="hud" id="levelname"><?php echo "\"".$m->getName()."\""; ?></span>
		Score: <span class="hud" id="score">0</span>		
	</div>
	
	<canvas id="canvas" width="640" height="480">
		<p>Your browser does not support canvas.</p>
	</canvas>

</body>
</html>