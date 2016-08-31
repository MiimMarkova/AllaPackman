/**
 * 
 */

function MoneyBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	var color = 'yellow';
}

MoneyBall.prototype = Object.create(SmallBall.prototype);
MoneyBall.prototype.constructor = MoneyBall;

MoneyBall.prototype.giveBonus = function (player) {
	player.setPoints(player.getPoints() + 100);
}