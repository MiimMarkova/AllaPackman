/**
 * 
 */

function LifeBall (x, y, size,  color, cxt) {
	
	SmallBall.call(this, x, y, size,  color, cxt);
	
	
}


LifeBall.prototype = Object.create(SmallBall.prototype);
LifeBall.prototype.constructor = LifeBall;

LifeBall.prototype.giveBonus = function (player) {
	
}