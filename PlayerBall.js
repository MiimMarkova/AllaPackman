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
	
	this.move = function () {
		_this = this;
		if  (this.moveUp) {
			this.setY( this.getY() - speed)
		}
		
		if  (this.moveDown) {
			this.setY( this.getY() + speed)
		}
		
		if  (this.moveLeft) {
			
			this.setX( this.getX() - speed);
		}
		
		if  (this.moveRight) {
			this.setX( this.getX() + speed);
		}
	}
	
	this.handleKey = function (key, value) {
		_this = this;
		if (key == 37) {
			_this.moveLeft = value;
			
		}
		
		if (key == 38) {
			_this.moveUp = value;
		}
		
		if (key == 39) {
			_this.moveRight = value;
		}
		
		if (key == 40) {
			_this.moveDown = value;
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
	
	}
	/*this.move = function () {
		
		if (this.moveLeft) {
			console.log('left')
			cxt.clearRect(0, 0, canvas.width, canvas.height);
			this.setX(this.getX() - this.getSpeed());
			this.draw();
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
	
	/*this.handleKeyUp = function () {
		document.addEventListener('keyup', function(e) {
			if (e.keyCode == 37) {
				this.moveLeft = false;
				console.log('stop');
			}
			if (e.keyCode == 38) {
				this.moveUp = false;
			}
			
			if (e.keyCode == 39) {
				this.moveRight = false;
			}
			
			if (e.keyCode == 40) {
				this.moveDown = false;
			}
		}, false);
		
	}*/
	
}

Player.prototype = Object.create(Ball.prototype);
Player.prototype.constructor = Player;
Player.prototype.draw = function () {
	
	var cxt = this.getContext();
	cxt.restore();
	cxt.fillStyle = this.getColor();

	cxt.beginPath();
	cxt.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI*2, true);
	cxt.fill();
	cxt.closePath();
}
Player.prototype.init = function () {
	console.log('init');
	this.handleKey();
	
	//this.handleKeyUp();
	
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

/*Player.prototype.moveLeft = function () {
	console.log('func');
	this.setX(this.getX() - this.getSpeed());
}
Player.prototype.moveRight = function () {
	console.log('func');

	this.setX(this.getX() + this.getSpeed());
}
Player.prototype.moveUp = function () {
	
	
	this.setY(this.getY() - this.getSpeed());
}

Player.prototype.moveDown = function () {
	
	this.setY(this.getY() - this.getSpeed());
}

Player.prototype.handleKey = function () {
	console.log('in');
	document.addEventListener('keydown', function(e) {
		console.log('fuck you')
		if (e.keyCode == '37') {
			Player.moveLeft() ;
			console.log('left');
		}
		if (e.keyCode == 38) {
			this.moveUp() ;
		}
		
		if (e.keyCode == 39) {
			this.moveRight();
		}
		
		if (e.keyCode == 40) {
			this.moveDown();
		}
	}, false);
}*/
Player.prototype.takeBonus = function () {
	
}
