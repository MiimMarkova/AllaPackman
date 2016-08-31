/**
 * 
 */


function BallManager() {
	
	var balls = [SpeedBall, MoneyBall, LifeBall];
	this.ball;
	this.getBalls = function () {
		return balls;
	}
	
	this.setBalls = function (newBall) {
		balls.push(newBall)
	}
	
	
}

BallManager.prototype.createBall = function (context){
	var index= Math.floor(Math.random * 2)
	var randomX = Math.floor(Math.random*600);
	this.ball = new this.getBalls()[index](randomX, randomX, 10, context);
	console.log(this.getBalls()[index]);
	
}

BallManager.prototype.checkCollision = function (player) {
	if (player.getX() == this.ball.getX() && player.getY() == this.ball.getY()) {
		this.ball.giveBonus(player);
	}
	console.log(player);
	console.log(this.ball);	
}