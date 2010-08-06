const tileSize = 16;

const TILE_EMPTY = 0;
const TILE_WALL = 1;
const TILE_LADDER = 2;
const TILE_COIN = 3;

var tilenames = new Array("Vacio", "Pared", "Escalera", "Moneda");

var tiledir = "http://localhost/Untitled-html5-tile-based-platformer/images/tiles/";

var tilesrcs = new Array(
						tiledir+"blank.png", 
						tiledir+"wall.png", 
						tiledir+"ladder.png", 
						tiledir+"coin.png");
						
var tileimages = new Array();

for(i=1;i<=3;i++)
	tileimages[i] = new Image();
	
for(tile in tileimages)
	tileimages[tile].src = tilesrcs[tile];