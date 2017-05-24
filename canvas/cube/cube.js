const animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };

class Cube{
	constructor(id, option){
		this.canvas = document.getElementById(id);
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = document.body.offsetWidth;
		this.canvas.height = document.body.offsetHeight;

		this.props = {
			fallLength: 500,
			centerX: this.canvas.width / 2,
			centerY: this.canvas.height / 2,
			cubeWidth: 100,
			length: 100
		}

		this.dots = [];
		this.faces = [];
		this.vectors = [];

		option && setOption(option);

		this.init();
	}

	setOption(option){
		for(let index in data){
			this.props[index] = data[index];
		}
	}

	init(){
		this.initVector();
		this.initCube();
	}

	getVector(x, y, z){
		return {x: x, y: y, z: z};
	}

	get2DXY(vector){
		let scale = this.props.fallLength / (this.props.fallLength + vector.z),
		X = vector.x * scale + this.props.centerX,
		Y = vector.y * scale + this.props.centerY;
		return [X, Y];
	}

	initVector(){
		let l = this.props.length / 2,
		_VP = this.vectors,
		_GV = this.getVector;

		_VP.push(_GV(-l, -l, l));
		_VP.push(_GV(-l, l, l));
		_VP.push(_GV(l, -l, l));
		_VP.push(_GV(l, l, l));

		_VP.push(_GV(l, -l, -l));
		_VP.push(_GV(l, l, -l));
		_VP.push(_GV(-l, -l, -l));
		_VP.push(_GV(-l, l, -l));
	}

	initFace(v1, v2, v3, v4, color){
		let zIndex = v1.z + v2.z + v3.z + v4.z;
		return {v1: v1, v2: v2, v3: v3, v4: v4, color: color, zIndex: zIndex}
	}

	initCube(){
		let _FP = this.faces,
		_IF = this.initFace,
		_V = this.vectors;
		_FP.push(_IF(_V[0], _V[1], _V[3], _V[2], '#6c6'));
		_FP.push(_IF(_V[2], _V[3], _V[5], _V[4], '#6cc'));
		_FP.push(_IF(_V[4], _V[5], _V[7], _V[6], '#cc6'));
		_FP.push(_IF(_V[6], _V[7], _V[1], _V[0], '#c6c'));
		_FP.push(_IF(_V[1], _V[3], _V[5], _V[7], '#666'));
		_FP.push(_IF(_V[0], _V[2], _V[4], _V[6], '#ccc'));

		_FP.sort((a, b) => b.zIndex - a.zIndex);

		_FP.forEach((val) => this.drawFace(val));
	}

	drawFace(val){
		let ctx = this.ctx;
		
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(...this.get2DXY(val.v1));
		ctx.lineTo(...this.get2DXY(val.v2));
		ctx.lineTo(...this.get2DXY(val.v3));
		ctx.lineTo(...this.get2DXY(val.v4));
		ctx.fillStyle = val.color;
		ctx.fill();
		ctx.closePath();
	}

}