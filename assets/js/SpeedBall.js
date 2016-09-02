/**
 * 
 */

function SpeedBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	var color = '#336FC5';
	this.getColor = function () {
		return color;
	}
	
	
}

SpeedBall.prototype = Object.create(SmallBall.prototype);
SpeedBall.prototype.constructor = SpeedBall;



SpeedBall.prototype.giveBonus = function (player) {
	player.setSpeed(8);

	function stop () {
		player.setSpeed(4);
		
	}
	window.setTimeout(stop, 10000);
}