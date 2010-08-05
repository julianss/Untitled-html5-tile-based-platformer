const tileSize = 16;
const FPS = 30;

var canvas = null;
var context2D = null;

/*TILES*/
var map = null;
var tileimages = new Array();
for(i=1;i<=3;i++)
	tileimages[i] = new Image();
var grad = null;

/*SPRITES*/
var sprites = new Array();
var heroSprite = null;

/*SOUNDS*/
var channels = new Array();
for(i=0;i<8;i++){
	channels[i] = new Audio();
}
var currentChannel = 0;

/*GAME*/
var hero;
var score = 0;

window.onload = start;

function start()
{
	document.onkeydown = function(event){keyDown(event)};
	document.onkeyup = function(event){keyUp(event)};
	
	canvas = $("#canvas")[0];
	context2D = canvas.getContext('2d');
	
	tileimages[1].src = "images/wall.png";
	tileimages[2].src = "images/ladder.png";
	tileimages[3].src = "images/moneda.png";
	
	hero = new Hero().setupHero("hero", 16, tileSize*13)
	sprites.push(hero);
	
	
	createBackGradient();
	loadMap(0);
	$("#canvas").ajaxComplete(function(){
		setInterval(gameLoop, 1000/FPS);
	});
	
}

function createBackGradient()
{
	grad = context2D.createLinearGradient(0,480,0,0);
	grad.addColorStop(0, "rgb(180,180,180)");
	grad.addColorStop(1, "rgb(240,240,240)");
}

function drawBack()
{
	context2D.fillStyle = grad;
	context2D.fillRect(0,0,640,480);
}

function drawMap()
{
	for(i in map)
		for(j in map[i]){
			tile = map[i][j];
			if(tile>0)
				context2D.drawImage(tileimages[tile], j*tileSize, i*tileSize);
		}
				
}

function loadMap(num)
{
	dir = 'php/getMap.php?num='+num;
	jQuery.ajax({url: dir, type: 'GET', success: function(data, ts, xhr){
			lines = data.split('\n');
			map = new Array();
			for(l in lines){
				row = new Array();
				tiles = lines[l].split(',');
				for(t in tiles)
					row.push(parseInt(tiles[t]));
				map.push(row);	
			}
		}
	});
}

function gameLoop(){
	
	if(isTile(map, hero.getGridCoord(tileSize), 3)){
		addScore(100);
		clearTile(map, hero.getGridCoord(tileSize));
	}

	drawBack();
	drawMap();
	for(s in sprites){
		if(sprites[s].update)
			sprites[s].update();
		drawSprite(sprites[s], context2D);
	}
}

function keyUp(event){
	for(s in sprites){
		if(sprites[s].keyUp)
			sprites[s].keyUp(event);
	}
}

function keyDown(event){
	for(s in sprites){
		if(sprites[s].keyDown)
			sprites[s].keyDown(event);
	}
}

