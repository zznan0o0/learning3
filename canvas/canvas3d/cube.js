class canvas3D{
	constructor(props) {
		this.props3D = {
			fallLength: props.fallLength ? props.fallLength : 500,
			originX: props.originX ? props.originX : 0,
			originY: props.originY ? props.originY : 0,
		}
	}

	get2DXY(x, y, z){
		let scale = -this.props3D.fallLength / (this.props3D.fallLength + z),
			X = scale * x + this.props3D.originX,
			Y = scale * y + this.props3D.originY;
		return {X: X, Y: Y};
	}

	rotateX(x, y, z, angle){
		let cos = Math.cos(angle),
			sin = Math.sin(angle);

		let y1 = cos * y - sin * z,
			z1 = cos * z + sin * y;

		return {x:x, y:y1, z:z1};
	}

	rotateY(x, y, z, angle){
		let cos = Math.cos(angle),
			sin = Math.sin(angle);

		let x1 = cos * x - sin * z,
			z1 = cos * z + sin * x;

		return {x:x1, y:y, z:z1};
	}

	rotateZ(x, y, z, angle){
		let cos = Math.cos(angle),
			sin = Math.sin(angle);

		let x1 = cos * x - sin * y,
			y1 = cos * y + sin * x;

		return {x:x1, y:y1, z:z};
	}
}

class Cube extends canvas3D{
	constructor(canvas) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let props = {
			fallLength: 1000,
			originX: canvas.width / 2,
			originY: canvas.height / 2
		}

		super(props);	

		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.vectors = [];
		this.faces = [];
		
		this.props = {
			cubeLength: 50,
			angleX: 0.05,
			angleY: 0.05,
			rotateRatio: 0.0001
		};

		this.states = {

		};

		this.init();
	}

	init(){
		this.initVectors();
		
		//this.eachDrawVector();

		this.initFaces();
		//this.drawFace(this.faces[0])
		this.drawFaces();

		this.mousemove()
		this.animate();
	}

	initVectors(){
		let l = this.props.cubeLength;
		//0123
		this.vectors.push({x: -l, y: -l, z: l});
		this.vectors.push({x: -l, y: l, z: l});
		this.vectors.push({x: l, y: -l, z: l});
		this.vectors.push({x: l, y: l, z: l});
		//4567
		this.vectors.push({x: l, y: -l, z: -l});
		this.vectors.push({x: l, y: l, z: -l});
		this.vectors.push({x: -l, y: -l, z: -l});
		this.vectors.push({x: -l, y: l, z: -l});
	}

	initFaces(){
		this.faces[0] = [this.vectors[0], this.vectors[1], this.vectors[3], this.vectors[2], '#6ED6AB'];
		this.faces[1] = [this.vectors[2], this.vectors[3], this.vectors[5], this.vectors[4], '#6E98D6'];
		this.faces[2] = [this.vectors[4], this.vectors[5], this.vectors[7], this.vectors[6], '#6E80D6'];
		this.faces[3] = [this.vectors[6], this.vectors[7], this.vectors[1], this.vectors[0], '#C66ED6'];
		this.faces[4] = [this.vectors[1], this.vectors[3], this.vectors[5], this.vectors[7], '#B3D66E'];
		this.faces[5] = [this.vectors[0], this.vectors[2], this.vectors[4], this.vectors[6], '#D4D66E'];
	}

	changeAngleX(){
		this.vectors.forEach((item, index) => {
			this.vectors[index] = super.rotateX(item.x, item.y, item.z, this.props.angleX);
		})
	}

	changeAngleY(){
		this.vectors.forEach((item, index) => {
			this.vectors[index] = super.rotateY(item.x, item.y, item.z, this.props.angleY);
		})
	}

	drawVector(X, Y){
		this.ctx.beginPath();
		this.ctx.arc(X, Y, 2, 0, 2 * Math.PI);
		this.ctx.stroke();
		this.ctx.closePath();
	}

	eachDrawVector(){
		this.vectors.forEach((item, index) => {
			this.drawVector(super.get2DXY(item.x, item.y, item.z).X, super.get2DXY(item.x, item.y, item.z).Y);
		})
	}



	drawFace(face){
		let vectors = [];

		for(let i = 0; i < 4; i++){
			vectors.push(super.get2DXY(face[i].x, face[i].y, face[i].z))
		}

		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.moveTo(vectors[0].X, vectors[0].Y);
		this.ctx.lineTo(vectors[1].X, vectors[1].Y);
		this.ctx.lineTo(vectors[2].X, vectors[2].Y);
		this.ctx.lineTo(vectors[3].X, vectors[3].Y);
		this.ctx.closePath();
		this.ctx.fillStyle = face[4];
		this.ctx.fill();
	}

	drawFaces(){
		this.faces.sort((a, b) => (b[0].z + b[1].z + b[2].z + b[3].z) - (a[0].z + a[1].z + a[2].z + a[3].z) );
		this.faces.forEach((item) => {
			this.drawFace(item);
		})
	}

	mousemove(){
		this.canvas.addEventListener('mousemove', (e) => {
			let x = e.clientX - this.props3D.originX,
				y = e.clientY - this.props3D.originY;
			this.props.angleX = y * this.props.rotateRatio;
			this.props.angleY = x * this.props.rotateRatio;
		})
	}

	animate(){
		window.requestAnimationFrame(() => {
			this.changeAngleX();
			this.changeAngleY();
			this.clear();
			this.initFaces();
			this.drawFaces();
			this.animate();
		})
	}

	clear(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
