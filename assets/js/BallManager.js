/**
 * 
 */


function BallManager() {
	
	var ballTypes = [SpeedBall, MoneyBall, LifeBall];
	var balls = [];
	
	this.getBalls = function () { return balls; }
	this.setBalls = function (newBall) { balls.push(newBall); }
	
	this.getBallType = function () { return ballTypes; }

}

BallManager.prototype.createBall = function (context){
	var index = Math.floor(Math.random() * this.getBallType().length);
	var ballType = this.getBallType()[index];
	
	function random () {
		var res = Math.floor(Math.random()*600);
		return res;
	}
	
	if (this.getBalls().length < 3) {
		var ball = new ballType(random(), random(), 10, context);
		
		if (ballType == LifeBall) {
			function looseLife() {
				ball.setGone(true);
				console.log('started')
				player.setLives(player.getLives() - 1);
			}
			window.setTimeout(looseLife, 10000);
		}
		this.setBalls(ball);
	}
}

BallManager.prototype.checkCollision = function (player, point, lives, game ) {
	for (var i = 0; i < this.getBalls().length; i++) {
		var playX = player.getX();
		var playY = player.getY();
		var ballX = this.getBalls()[i].getX();
		var ballY = this.getBalls()[i].getY()
		
		if (this.getBalls()[i].hasOwnProperty('getGone') ){
			
			if (this.getBalls()[i].getGone()){
				this.getBalls().splice(i, 1)
				player.setLives(player.getLives() - 1);
				
				if(player.getLives() <= 0) {
					game.setIsGame( false);
				}
				player.showVitals(point, lives);
			}
		}
		if ( ((playX + 30) > ballX && (playX - 30) < ballX) 
				&& ((playY + 30) > ballY && (playY - 30) < ballY)) {
			this.getBalls()[i].giveBonus(player);
			this.getBalls().splice(i, 1);
			player.showVitals(point, lives);
		}
		
		if ((playX + 30)  >= canvas.width || (playX - 30) <= 0 || 
				(playY - 30 )<= 0 || (playY + 30) >= canvas.height) {
			player.setX(300);
			player.setY(300);
			game.setIsGame( false);
		} 
	}
}
	