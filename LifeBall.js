/**
 * 
 */

function LifeBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	
	var color = 'red';
}


LifeBall.prototype = Object.create(SmallBall.prototype);
LifeBall.prototype.constructor = LifeBall;

LifeBall.prototype.giveBonus = function (player) {
	
}