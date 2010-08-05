function Sprite(name, x, y)
{
	this.velx = 0;
	this.vely = 0;
	this.animations = new Array();
	this.currentAnim = null;
	this.currentFrame = 0;
	this.animInterval = null;
	this.animIsRunning = false;
	this.rect = null;
	this.dir = 0;
	this.animLoop = true;
	
	this.setupSprite = function(name, x, y){
		this.name = name;
		this.rect = new Rectangle(x, y, tileSize-1, tileSize-1);
		return this;
	}
	
	this.loadAnim = function(animName, dir, numFrames, fileName)
	{
		if(!this.animations[animName])
			this.animations[animName] = new Array();
		this.animations[animName][dir] = new Array();
		for(i=0;i<numFrames;i++){
			this.animations[animName][dir][i] = new Image();
			this.animations[animName][dir][i].src = "images/" + this.name + "/" + fileName + i + ".png";		
		}
	}
	
	this.setDir = function(dir)
	{
		this.dir = dir;
	}
	
	this.getImage = function()
	{
		if(this.animations[this.currentAnim][this.dir])
			return this.animations[this.currentAnim][this.dir][this.currentFrame];
		else
			return this.animations[this.currentAnim][0][this.currentFrame];
	}
	
	this.changeAnim = function(name)
	{
		if(this.currentAnim!=name){
			this.currentAnim = name;
			this.currentFrame = 0;
		}
	}
	
	this.updateAnim = function()
	{
		dir = this.dir;
		this.currentFrame++;
		if(!this.animations[this.currentAnim][this.dir])
			dir = 0;
		if(this.currentFrame == this.animations[this.currentAnim][dir].length){
			if(this.animLoop)
				this.currentFrame = 0;
			else
				this.currentFrame = this.currentFrame-1;
		}
		//$("#debug")[0].innerHTML = "currentFrame: "+this.currentFrame; 
	}
	
	this.animHasFinished = function(){
		dir = this.dir;
		if(!this.animations[this.currentAnim][this.dir])
			dir = 0;
		if(this.currentFrame == this.animations[this.currentAnim][dir].length-1)
			return true;
		return false;
			
	}
	
	this.getGridCoord = function(tilesize)
	{
		thispos = new Point(this.rect.x, this.rect.y);
		point = toGridCoord(thispos, tilesize);
		return point;
	}
	
}

function startSpriteAnim(sprite, speed, loop)
{
	if(!sprite.animIsRunning){
		sprite.animInterval = setInterval(function(){sprite.updateAnim()}, speed);
		sprite.animIsRunning = true;
		sprite.animLoop = loop;
	}
}

function stopSpriteAnim(sprite)
{
	if(sprite.animIsRunning){
		clearInterval(sprite.animInterval);
		sprite.animIsRunning = false;
	}
}

function drawSprite(sprite, context)
{
	context.drawImage(sprite.getImage(), Math.round(sprite.rect.x), Math.round(sprite.rect.y));
}