window.addEventListener('load', function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var angle = 0;


	function loop(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = '#4bcd5f';

		if(angle > 360) angle = 0;
		angle ++;

		for (var i = 0; i < 3; i++){
			var radian = (angle + 15 * i) * Math.PI / 180;
			var deltaHeight = Math.sin(radian) * 50;
			var deltaTopRight = Math.cos(radian) * 50;
			context.beginPath();
			context.moveTo(0, canvas.height / 2 + deltaHeight);
			context.lineTo(canvas.width, canvas.height / 2 + deltaTopRight);
			context.moveTo(0, canvas.height / 2 + deltaHeight);
			context.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 50, canvas.width / 2, canvas.height / 2 + deltaTopRight - 50 , canvas.width, canvas.height / 2 + deltaTopRight);
			context.lineTo(canvas.width, canvas.height);
			context.lineTo(0, canvas.height);
			context.lineTo(0, canvas.height / 2 + deltaHeight);
			context.fill();
			context.closePath();
		}

		requestAnimationFrame(loop);
	}

	loop();
});