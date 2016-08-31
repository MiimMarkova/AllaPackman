/**
 * 
 */

function Game () {
	
	var context = document.getElementById('canvas').getContext('2d');
	var player = new Player(100, 100, 50, 'black', context);
	var ballM = new  BallManager;
	this.getBallM = function ( ) {
		 return ballM;
	}
	this.getPlayer = function () {
		return player;
	}
	
	function loop() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.init();
		player.draw();
		ballM.createBall(context);
		ballM.checkCollision(player);
	requestAnimationFrame(loop);
	}
	
	requestAnimationFrame(loop);
}

Game.prototype.init = function (){
	this.getPlayer().draw();
	this.getPlayer().init();
}