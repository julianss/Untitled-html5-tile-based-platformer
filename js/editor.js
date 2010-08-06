var currentTile = 0;
var drawing = false;
var currentmap = new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),
new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),
new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),
new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),
new Array(),new Array(),new Array(),new Array(),new Array(),new Array());

window.onload = function(){
	var cells = $('.cell');
	for(i in cells){
		id = "#"+cells[i].id;
		$(id).mouseover(function(e){
			if(drawing==true)
				placeTile(this);
		});
		$(id).mousedown(function(e){
				placeTile(this);
		});
	}
	$('#tablemap').mousedown(function(){
			drawing = true;
		});
	$('#tablemap').mouseup(function(){
			drawing = false;
		});
	$('#tablemap').mouseleave(function(){
			drawing = false;
		});
	initMap();
}

function changeTile(tile){
	currentTile = tile;
	$("#currentTile")[0].src = tilesrcs[tile];
	$("#currentTileName")[0].innerHTML = tilenames[tile];
}

function placeTile(element){
	element.src = tilesrcs[currentTile];
	var id = element.id;
	coords = id.split("-");
	currentmap[coords[0]][coords[1]] = currentTile;
	//alert("map["+coords[0]+"]["+coords[1]+"]="+currentmap[coords[0]][coords[1]]);
}

function initMap(){
	for(i in currentmap)
		for(j=0;j<40;j++)
			currentmap[i][j] = 0;
}

function mapToString(){
	var mapstr = "";
	var row;
	var rowstr;
	for(i in currentmap){
		row = currentmap[i];
		rowstr = row.join(",");
		mapstr = mapstr + rowstr + "-";
	}
	mapstr = mapstr.substr(0,mapstr.length-1);
	return mapstr;
}

function saveMap(){
	var name = $("#formname")[0].value;
	if(name==""){
		alert("No has asignado un nombre a tu nivel!");
		return;
	}
	$("#formtiles")[0].value = mapToString();
	$("#save").submit();
}
