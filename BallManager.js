/**
 * 
 */

function BallManager() {
	
	var balls = [];
	
	this.getBalls = function () {
		return balls;
	}
	
	this.setBalls = function (newBall) {
		balls.push(newBall)
	}
	
	
}

BallManager.prototype.createBall = function (){
	
}