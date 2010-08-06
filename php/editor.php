<html>
	<head>
		<title></title>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/tileconsts.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/helpers.js"></script>
		<script type="text/javascript" src="http://localhost/Untitled-html5-tile-based-platformer/js/editor.js"></script>
		<style type="text/css">
			table {
				background-color: white;
				border:solid black 1px;
				width:640px;
				height:480px;
			}
			td {
				padding: 0 0 0 0;
				margin: 0 0 0 0;
				border-bottom: solid silver 1px;
				border-right: solid silver 1px;
				width:16px;
				height:16px;
			}
			table img{
				width: 16;
				height: 16;
			}
			#right{
				float: right;
			}
			#left{
				float:left;
			}
			#currentTile{
				border: solid black 1px;
				width: 64px;
				height: 64px;
			}
		</style>
	</head>
	<body>

		<div id="left">
			<table id="tablemap">	
<?php
for($i=0;$i<30;$i++){
	echo "<tr>";
	for($j=0;$j<40;$j++)
		echo "<td><img class='cell' id='".$i."-".$j."' src='http://localhost/Untitled-html5-tile-based-platformer/images/tiles/blank.png' /></td>";
	echo "</tr>";
}
?>
			</table>
		</div>
		
		<div id="right">
		
			<div id="controls">
				<input type="button" value="Vacio" onclick="javascript:changeTile(TILE_EMPTY);"/><br />
				<input type="button" value="Pared" onclick="javascript:changeTile(TILE_WALL);"/><br />
				<input type="button" value="Escalera" onclick="javascript:changeTile(TILE_LADDER);"/><br />
				<input type="button" value="Moneda" onclick="javascript:changeTile(TILE_COIN);"/><br />
				<input type="button" value="Empiezo" /><br />
				<img id="currentTile" src="http://localhost/Untitled-html5-tile-based-platformer/images/tiles/blank.png" /><br />
				<span id="currentTileName"></span>
				<hr>
				<form id="save" method="post" action="saveMap.php">
					Nombre:<input type="text" id="formname" name="name" /><br />
					<input type="hidden" id="formtiles" name="tiles"/>
					<input type="button" value="Crear nivel" onclick="javascript:saveMap();"/>
				</form>
			</div>
	
		
		</div>
		
	</body>
</html>