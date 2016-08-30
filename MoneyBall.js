/**
 * 
 */

function MoneyBall (x, y, size,  color, cxt) {
	
	SmallBall.call(this, x, y, size,  color, cxt);
}

MoneyBall.prototype = Object.create(SmallBall.prototype);
MoneyBall.prototype.constructor = MoneyBall;

MoneyBall.prototype.giveBonus = function (player) {
	player.setPoints(player.getPoints() + 100);
}