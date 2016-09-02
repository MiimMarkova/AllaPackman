/**
 * 
 */

function MoneyBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	var color = '#F7E75C';
	this.getColor = function () {
		return color;
	}
}

MoneyBall.prototype = Object.create(SmallBall.prototype);
MoneyBall.prototype.constructor = MoneyBall;

MoneyBall.prototype.giveBonus = function (player) {
	player.setPoints(player.getPoints() + 100);
	console.log(player.getPoints());
	
}