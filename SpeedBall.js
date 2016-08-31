/**
 * 
 */

function SpeedBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	var color = 'blue';
	
	
}

SpeedBall.prototype = Object.create(SmallBall.prototype);
SpeedBall.prototype.constructor = SpeedBall;



SpeedBall.prototype.giveBonus = function (player) {
	player.setSpeed(player.getSpeed() * 2);
}