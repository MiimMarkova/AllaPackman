/**
 * 
 */

function Player (x, y, size,  color, cxt) {
	
	Ball.call(this, x, y, size,  color, cxt);
	
	var lives = 3;
	var points = 0;
	var speed = 4;
	this.moveLeft = false;
	 this.moveRight = false;
	 this.moveUp = false;
	 this.moveDown = false;
	
	this.getLives = function () {
		return lives;
	}
	
	this.setLives = function (newLives) {
		lives = newLives;
	}
	
	this.getPoints = function () {
		return points;
	}
	
	this.setPoints = function (newPoints) {
		points = newPoints;
	}

	this.getSpeed = function () {
		return speed;
	}
	
	this.setSpeed = function (newSpeed) {
		speed = newSpeed;
	}
	
	this.move = function () {
		_this = this;
		if  (_this.moveUp) {
			this.setY(y -=  speed);
			
		}
		
		if  (_this.moveDown) {
			this.setY(y +=  speed);
		}
		
		if  (_this.moveLeft) {
			
			this.setX(x -=  speed);
		}
		
		if  (_this.moveRight) {
			this.setX(x +=  speed);
			
		}
	}
	
	this.handleKey = function (key, value) {
		
		if (key == 37) {
			this.moveLeft = value;
		}
		
		if (key == 38) {
			this.moveUp = value;
		}
		
		if (key == 39) {
			this.moveRight = value;
		}
		
		if (key == 40) {
			this.moveDown = value;
		}
	}
	this.init = function () {
			_this= this; 
			document.addEventListener('keyup', function(e){
				_this.handleKey(e.keyCode, false);
			});
			
			document.addEventListener('keydown', function(e){
				_this.handleKey(e.keyCode, true);
			});
	console.log('this.init(')
	}
	
	Player.prototype = Object.create(Ball.prototype);
	Player.prototype.constructor = Player;
	Player.prototype.draw = function () {
		var _this = this;
		var cxt = _this.getContext();
		cxt.restore();
		cxt.fillStyle = _this.getColor();
		
		cxt.beginPath();
		cxt.arc(_this.getX(), _this.getY(), _this.getRadius(), 0, Math.PI*2, true);
		cxt.fill();
		cxt.closePath();
	}
	Player.prototype.showVitals = function (point, lives) {
		
		point.innerHTML = 'Points: ' + _this.getPoints();
		lives.innerHTML = 'Lives: ' + _this.getLives();
	}
}