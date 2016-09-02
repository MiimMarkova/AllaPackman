/**
 * 
 */

function Ball(x, y, size,  color, cxt) {
	
	if (this.constuctor == Ball) {
		throw new Error  ('This is an Abstract Class.')
	}
	var x = x;
	var y = y;
	var color = color;
	var radius = size;
	var cxt = cxt;
	
	this.getX = function () {
		return x;
	}
	
	this.setX = function (newX) {
		x = newX;
	}
	
	this.getY = function () {
		return y;
	}
	
	this.setY = function (newY) {
		y = newY;
	}
	
	this.getColor = function () {
		return color;
	}
	
	this.setColor = function (newColor) {
		color = newColor;
	}
	
	this.getRadius = function () {
		return radius;
	}
	
	this.setRadius = function (newRadius) {
		radius = newRadius;
	}
	
	this.getContext = function (){
		return cxt;
	}
}
