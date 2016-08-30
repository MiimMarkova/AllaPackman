/**
 * 
 */

function SmallBall (x, y, size,  color, cxt) {

	if (this.constuctor == Ball) {
		throw new Error  ('This is an Abstract Class.')
	}
	Ball.call(this, x, y, size,  color, cxt);

}

SmallBall.prototype.draw = function() {
	
	var cxt = this.getContext();
	cxt.restore();
	cxt.fillStyle = this.getColor();

	cxt.beginPath();
	cxt.arc(this.getX(), this.getY(), this.getRadius(), 0, Math.PI*2, true);
	cxt.fill();
	cxt.closePath();
}
