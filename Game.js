/**
 * 
 */

function Game () {
	
	var player = new Player();
	var context = document.getElementById('canvas').getContext('2d');
	
	this.getPlayer = function () {
		returnplayer;
	}
	
	function loop() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.init();
		player.draw();
		
	requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);
}

Game.prototype.init(){
	this.getPlayer().draw();
	
}