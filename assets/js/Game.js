/**
 * 
 */

function Game () {
	
	var context = document.getElementById('canvas').getContext('2d');
	var player = new Player(100, 100, 30, 'grey', context);
	var ballM = new  BallManager;
	var isGame = true;
	var _this = this;
	
	this.getIsGame = function () { return isGame; }
	this.setIsGame = function (value) { isGame = value; }
	
	this.getBallM = function ( ) { return ballM; }
	
	this.getPlayer = function () { return player; }
	
	function loop() {
		if (!isGame) {
			console.log(isGame);
			return document.getElementById('scoreBoard').innerHTML = 'Game Over';
		}
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.move();
		player.draw();
		
		for (var i = 0; i < ballM.getBalls().length; i++) {
			ballM.getBalls()[i].draw();
		}
		ballM.createBall(context);
		ballM.checkCollision(player, document.getElementById('points'), document.getElementById('lives'), _this);
	requestAnimationFrame(loop);
	}
	
	requestAnimationFrame(loop);
}

Game.prototype.init = function (){
	//this.getPlayer().draw();
	this.getPlayer().init();
}
