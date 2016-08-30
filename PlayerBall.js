/**
 * 
 */

function Player (x, y, size,  color, cxt) {
	
	Ball.call(this, x, y, size,  color, cxt);
	
	var lives = 3;
	var points = 0;
	var speed = 3;
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
	

	
}

Player.prototype = Object.create(Ball.prototype);
Player.prototype.constructor = Player;

Player.prototype.init = function () {

	document.addEventListener('keydown', function (e) {
		if (e.keycode == 37) {
			this.moveLeft();
		}
		if (e.keycode == 38) {
			this.moveUp();
		}

		if (e.keycode == 39) {
			this.moveRight();
		}

		if (e.keycode == 40) {
			this.moveDown();
		}
	}, false);

}
Player.prototype.draw = function () {
	
	var cxt = this.getContext();
	cxt.restore();
	cxt.fillStyle = this.getColor();

	cxt.beginPath();
	cxt.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI*2, true);
	cxt.fill();
	cxt.closePath();
}
/*Player.prototype.move = function {
	if (this.moveLeft) {
		this.setX(this.getX() - this.getSpeed());
	}
	
	if (this.moveRight) {
		this.setX(this.getX() + this.getSpeed());
	}

	if (this.moveUp) {
		this.setY(this.getY() - this.getSpeed());
	}

	if (this.moveDown) {
		this.setY(this.getY() - this.getSpeed());
	}
}

*/

Player.prototype.moveLeft = function () {
	this.setX(this.getX() - this.getSpeed());
}
Player.prototype.moveRight = function () {
	
	this.setX(this.getX() + this.getSpeed());
}
Player.prototype.moveUp = function () {
	
	
	this.setY(this.getY() - this.getSpeed());
}

Player.prototype.moveDown = function () {
	
	this.setY(this.getY() - this.getSpeed());
}

Player.prototype.takeBonus = function () {
	
}
