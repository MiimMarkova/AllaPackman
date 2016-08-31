/**
 * 
 */

function Game () {
	
	var context = document.getElementById('canvas').getContext('2d');
	var player = new Player(100, 100, 50, 'black', context);
	
	this.getPlayer = function () {
		return player;
	}
	
	function loop() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.move();
		player.draw();
		
	requestAnimationFrame(loop);
	}
	
	requestAnimationFrame(loop);
}

Game.prototype.init = function (){
	this.getPlayer().draw();
	this.getPlayer().init();
}