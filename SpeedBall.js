/**
 * 
 */

function SpeedBall (x, y, size,  color, cxt) {
	
	SmallBall.call(this, x, y, size,  color, cxt);
	
	
}

SpeedBall.prototype = Object.create(SmallBall.prototype);
SpeedBall.prototype.constructor = SpeedBall;



SpeedBall.prototype.giveBonus = function (player) {
	player.setSpeed(player.getSpeed() * 2);
}