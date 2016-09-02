/**
 * 
 */

function LifeBall (x, y, size, cxt) {
	
	SmallBall.call(this, x, y, size, cxt);
	
	var color = '#EB5F52';
	this.getColor = function () {
		return color;
	}
	var gone = false;
	this.getGone = function () {
		return gone;
	}
	this.setGone = function (value) {
		gone = value;
	}
}


LifeBall.prototype = Object.create(SmallBall.prototype);
LifeBall.prototype.constructor = LifeBall;

LifeBall.prototype.giveBonus = function (player) {
	player.setLives(player.getLives() + 1);
	
	
}