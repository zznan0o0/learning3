var ParticleText = function(id, input){
	this.canvas = document.getElementById(id);
	this.context = this.canvas.getContext('2d');

	this.input = input;
	this.init();
}

ParticleText.prototype = {

	constructor: ParticleText,

	init: function(){
		this.dots = [];
		this.timer = null;

		this.drawText();
		this.getImageData();
		this.drawDot();

		this.inputChange();
	},

	drawText: function(text){
		text = text ? text : 'HELLOW';

		this.context.beginPath();
		this.context.font = '80px  Microsoft YaHei';
		this.context.fillStyle = 'rgba(0, 0, 0, 1)';
		this.context.fillText(text, 150, 150);
		this.context.fill();
		this.context.closePath();
	},

	getImageData: function(){
		this.imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for(var y = 0; y < this.canvas.height; y += 3){
			for(var x = 0; x < this.canvas.width; x += 3){
				var i = (x + y * this.imgData.width) * 4;

				this.imgData.data[i + 3] >= 128 && this.dots.push({x: x, y: y});
			}
		}
	},

	getImageData2: function(){
		this.imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		var j = 0;

		for(var y = 0; y < this.canvas.height; y += 3){
			for(var x = 0; x < this.canvas.width; x += 3){
				var i = (x + y * this.imgData.width) * 4;
				if(this.imgData.data[i + 3] >= 128){
					if(this.dots[j]){
						this.dots[j].toX = x;
						this.dots[j].toY = y;
					}
					else{
						var rx =  Math.floor(Math.random() * (this.canvas.width - 1)) + 1,
							ry = Math.floor(Math.random() * (this.canvas.height - 1)) + 1;
						this.dots.push({x: rx, y: ry, toX: x, toY: y});
					}

					j++;
				}
			}
		}

		this.dots = this.dots.slice(0, j);
	},

	drawDot: function(){
		for(var i = 0; i < this.dots.length; i++){
			this.context.beginPath();
			this.context.arc(this.dots[i].x, this.dots[i].y, 1, 0, Math.PI * 2, true);
			this.context.fill();
			this.context.closePath();
		}
	},

	rollDotsXY: function(){
		for(var i = 0; i < this.dots.length; i++){
			this.dots[i].toX = Math.floor(Math.random() * (this.canvas.width - 1)) + 1;
			this.dots[i].toY = Math.floor(Math.random() * (this.canvas.height - 1)) + 1;
		}
	},

	animationMoveDot: function(fn){
		this.timer = setInterval(function(){
			var equalCounts = 0;

			for(var i = 0; i < this.dots.length; i++){
				if(this.dots[i].equals){
				  ++equalCounts;
				}
			}

			if(this.dots.length == equalCounts){
				clearInterval(this.timer);

				for(var i = 0; i < this.dots.length; i++){
					delete this.dots[i].equals;
					delete this.dots[i].toX;
					delete this.dots[i].toY;
				}

				fn && fn();
			}
			else{
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.moveDot();
				this.drawDot();
			}

		}.bind(this), 20);
	},

	moveDot: function(){
		for(var i = 0; i < this.dots.length; i++){
			if(typeof this.dots[i].toX == 'number' && typeof this.dots[i].toY == 'number'){
				if(this.dots[i].x == this.dots[i].toX && this.dots[i].y == this.dots[i].toY){
					this.dots[i].equals = true;
				}
				else{
					var speedX = (this.dots[i].toX - this.dots[i].x) / 10,
						speedY = (this.dots[i].toY - this.dots[i].y) / 10;

					speedX = speedX > 0 ? Math.ceil(speedX) : Math.floor(speedX);
					speedY = speedY > 0 ? Math.ceil(speedY) : Math.floor(speedY);
					this.dots[i].x += speedX;
					this.dots[i].y += speedY;

				}
			}
		}
	},

	inputChange: function(){
		this.input.onchange = function(){
			clearInterval(this.timer);
			this.rollDotsXY();
			this.animationMoveDot(function(){
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.drawText(this.input.value);
				this.getImageData2();
				this.animationMoveDot();
			}.bind(this));

		}.bind(this);
	}
}