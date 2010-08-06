<?php
	include("MapDAO.php");
	include("Map.php");
	$mdao = new MapDAO();
	$all = $mdao -> selectAll();
?>
<html>
	<head>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/tileconsts.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/helpers.js"></script>
		<script type="text/javascript">
			window.onload = function(){
				var thumbs = $(".thumb");
				for(i in thumbs){
					var canvas = thumbs[i];
					var map = stringToMap(thumbs[i].innerHTML);
					drawMap(map, thumbs[i].getContext('2d'), 4, tileimages);
				}	
			}
		</script>
		<style type="text/css">
			.mapentry{
				margin-bottom: 30px;
			}
			.thumb{
				border:solid black 1px;
			}
		</style>
	</head>
	<body>
<?php
	foreach($all as $m){
		echo "<div class='mapentry'>";
		echo 	"<h3>".$m->getName()."</h3><br />";
		echo	"<a href='game.php?id={$m->getId()}'>";
		echo 	"<canvas id='{$m->getId()}' class='thumb' width='160' height='120'>";
		echo 		$m->getTiles();
		echo 	"</canvas></a>";
		echo "</div>";
	}
?>
	</body>
</html>